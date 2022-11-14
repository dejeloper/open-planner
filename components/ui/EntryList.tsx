import { FC, useContext, useMemo } from 'react';
import { Paper, List } from "@mui/material";
import { EntryStatus } from '../../interfaces';
import { EntryCard } from "./";
import { EntriesContext } from '../../context/entries';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

  const { entries } = useContext(EntriesContext);
  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries, status]);

  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflow: "hidden",
          backgroundColor: "transparent",
          padding: '3px 5px'
        }}>
        <List sx={{ opacity: "1" }}>
          {
            entriesByStatus.map(entry => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List>
      </Paper>
    </div>
  );
};
