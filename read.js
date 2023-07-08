// This file is for reading the data

// IMPORTS
import { exm_instance } from "./index";
import { functionID } from "./deploy";

const data = await exm_instance.functions.read(functionID);
console.log("data:", JSON.stringify(data));
