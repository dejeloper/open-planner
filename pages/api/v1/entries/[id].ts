import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database';
import { Entry, IEntry } from '../../../../models';

type Data =
  | { message: string }
  | IEntry[]
  | IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'El Id no es válido ' + id })
  }

  switch (req.method) {
    case 'GET':
      return getEntry(req, res)

    case 'PUT':
      return updateEntry(req, res)

    case 'DELETE':
      return deleteEntry(req, res)

    default:
      return res.status(400).json({ message: 'Endpoind no existe' })
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entryInDB = await Entry.findById(id);
  await db.disconnect();

  if (!entryInDB) {
    return res.status(400).json({ message: 'No hay Tarea con ese Id: ' + id })
  }

  return res.status(200).json(entryInDB);
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: 'No hay Tarea con ese Id: ' + id })
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true })

    await db.disconnect();
    return res.status(200).json(updatedEntry!)

  } catch (error: any) {
    await db.disconnect();
    console.log(error);
    return res.status(400).json({ message: "Error al actualizar Tarea." })
  }

}

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();

  try {
    const deletedEntry = await Entry.findByIdAndDelete(id);
    await db.disconnect();

    if (!deletedEntry) {
      return res.status(400).json({ message: 'No hay Tarea con ese Id: ' + id })
    }

    return res.status(200).json(deletedEntry)
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(400).json({ message: "Error al eliminar Tarea." })
  }

}