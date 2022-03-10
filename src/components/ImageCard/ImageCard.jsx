import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const ImageCard = ({ imageUrl }) => {
  return (
    <Card
      style={{ padding: "0.5rem", margin: "1rem auto" }}
      sx={{ maxWidth: 345 }}
    >
      <CardMedia component="img" height={200} image={imageUrl} alt={imageUrl} />
    </Card>
  );
};

export default ImageCard;
