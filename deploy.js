// This file is for deploying the function

// IMPORTS
import { ContractType } from "@execution-machine/sdk";
import fs from "fs";
import { exm_instance } from "./index";
import { state } from "./state";

// Contract Source
const contractSource = fs.readFileSync("handler.js");
// Data
const data = await exm_instance.functions.deploy(
  contractSource,
  state,
  ContractType.JS,
);

// Getting the function id
export const functionID = data.id;
