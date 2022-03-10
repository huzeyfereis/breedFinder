import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import ImageCard from "../ImageCard/ImageCard";
import Loading from "../Loading";

const ImageList = ({ images }) => {
  const { isLoading } = useSelector((state) => state.breeds);
  return (
    <Fragment>
      {isLoading && <Loading />}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {images.map((image) => (
          <ImageCard imageUrl={image} />
        ))}
      </div>
    </Fragment>
  );
};

export default ImageList;
