import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MediaCard({name, description, profile}) {
  return (
    <Card sx={{ maxWidth: 345, background: "linear-gradient(45deg, rgba(1, 0, 40, 1),hsl(241, 64%, 27%))", borderRadius: "1rem" }}>
      <CardMedia
        sx={{ height: 240 }}
        image={profile}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="inherit">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
