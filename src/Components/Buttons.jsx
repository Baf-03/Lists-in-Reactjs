import React from "react";

import Button from "@mui/material/Button";

export default function Buttons(props) {
  let { value, color, trigger } = props;

  return (
    <>
      <Button variant="outlined" onClick={trigger} color={color} sx={{}}>
        {" "}
        {value}{" "}
      </Button>
    </>
  );
}
