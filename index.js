// This is the main file
// dotenv
require("dotenv").config();

// IMPORTS
import { Exm } from "@execution-machine/sdk";

// VARIABLES
const EXM_API_TOKEN = process.env.EXM_API_TOKEN;

// INSTANCE
const exm_instance = new Exm({ token: EXM_API_TOKEN });

console.log(exm_instance);
