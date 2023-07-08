// This file is for creating the data

import { exm_instance } from "./index";
import { functionId } from "./functionId";
import { v4 as uuid } from "uuid";

const id = uuid();

// Inputs

const inputs = [
  {
    type: "create",
    post: {
      id,
      name: "varmas post",
      author: "Varma",
    },
  },
];

// Writing that to the EXM function
const data = await exm_instance.functions.write(functionID, inputs);
