import React from "react";

import { GridLoader } from "react-spinners";

import { Loading } from "./Loading.styled";

const Loader = () => {
  return (
    <Loading>
      <GridLoader color="#4A90E2" size={30} margin={20} />
    </Loading>
  );
};

export default Loader;
