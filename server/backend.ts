import { GenezioAuth, GenezioDeploy,  GenezioMethod, GnzContext } from "@genezio/types";
import { PrismaClient } from "@prisma/client";


type HTTPResponse = {
  status: number;
  message: string;
}

@GenezioDeploy()
export class BackendService {
  prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient();
  }

  @GenezioMethod({ type: "cron", cronString: "* * * * *" })
  async openDB(){
    console.log("doar test");
  }

  @GenezioAuth()
  async createAccount(context: GnzContext): Promise<HTTPResponse | string> {
    try{
      const userInfo = await this.prisma.account.findUnique({
        where: {userId: context.user!.userId}
      })

      if (userInfo !== undefined){
        throw new Error("Account already exist!");
      }

      const response = await this.prisma.account.create({
        data: {
          userId: context.user!.userId,
        },
      });

      if (!response){
        throw new Error("Internal Serval Error");
      }

      return {
        status: 200,
        message: "Account created!",
      }
    }
    catch(error){
      console.log(error);
      return "error";
    }
  }
}
