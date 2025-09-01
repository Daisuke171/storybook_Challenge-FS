import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useFetchData } from "../hooks/use-fetch-data";
import type React from "react";
import { Container, Typography } from "@mui/material";

interface Item {
  id: number;
  name: string;
  description: string;
}

const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

export const ApiShowcase: React.FC = () => {
  const { status, error, data } = useFetchData<Item>({ url: API_URL });

  if (status === "loading") return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        API Showcase
      </Typography>
      <List>
        {data.map((item) => (
          <ListItem
            key={item.id}
            alignItems="flex-start"
            sx={{
              mb: 2,
              borderRadius: 2,
              boxShadow: 1,
              bgcolor: "background.paper",
            }}
          >
            <ListItemText
              primary={<Typography variant="h6">{item.name}</Typography>}
              secondary={
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ApiShowcase;
