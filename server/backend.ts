import { GenezioDeploy, GenezioMethod } from "@genezio/types";
import { IgApiClient } from "instagram-private-api";
import { promisify } from "util";
import { readFile } from 'fs';
const readFileAsync = promisify(readFile);

@GenezioDeploy()
export class BackendService {

  constructor(){}

}
