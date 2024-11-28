import React from "react";
import { NavContext } from "../context/NavContext";

const useGlobalContext = () => {
  return React.useContext(NavContext);
};

export default useGlobalContext;
