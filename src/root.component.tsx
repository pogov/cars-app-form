import React from "react";
import { BrowserRouter } from "react-router-dom";
import Form from "./form/Form";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
}
