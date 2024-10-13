import React, { useContext } from "react";
import { ThemeContext } from "../App";  // Import context from App

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <p></p>
  );
};

export default ThemedComponent;
