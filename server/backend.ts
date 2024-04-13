import { GenezioDeploy,  GenezioMethod } from "@genezio/types";


@GenezioDeploy()
export class BackendService {

  constructor(){}

  @GenezioMethod({ type: "cron", cronString: "* * * * *" })
  async openDB(){
    console.log("doar test");
  }

}
