import { GenezioDeploy } from "@genezio/types";
import { IgApiClient } from "instagram-private-api";


@GenezioDeploy()
export class BackendService {

  private ig;

  constructor() {
    this.ig = new IgApiClient();
  }

  async login() {
    this.ig.state.generateDevice("alexandru.georgescu22@gmail.com");
    await this.ig.account.login("alexandru.georgescu22@gmail.com", "@lex@ndru22");
  }

  async test() {

      this.ig.state.generateDevice("alexandru.georgescu22@gmail.com");
      
      await this.ig.simulate.preLoginFlow();
      const loggedInUser = await this.ig.account.login("alexandru.georgescu22@gmail.com", "@lex@ndru22");

      process.nextTick(async () => await this.ig.simulate.postLoginFlow());

      const userFeed = this.ig.feed.user(loggedInUser.pk);
      const myPostsFirstPage = await userFeed.items();

      const myPostsSecondPage = await userFeed.items();
      
      return ;
  }

//   async test() {
//     const ACCESS_TOKEN = "385492911016970"
//     const APP_SECRET = "52a717fd6600d9a1d8d8cc964632b75d"

//     const PAGE_ID = "385492911016970";

//     const client: Client = new Client(ACCESS_TOKEN, PAGE_ID)

//     const pageInfoRequest: GetPageInfoRequest = client.newGetInstagramAccountInfoRequest();
//     // const pageMediaRequest: GetPageMediaRequest = client.newGetPageMediaRequest();

//     return pageInfoRequest;
//   }

//   async  getFollowersCount(): Promise<number | null> {
//     const accessToken = "385492911016970"
//     const endpoint = `https://graph.instagram.com/me?fields=followers_count&access_token=${accessToken}`;

//     try {
//         const response = await axios.get(endpoint);

//         if (response.status === 200) {
//             const { followers_count } = response.data;
//             return followers_count;
//         } else {
//             console.error(`Error: ${response.status}`);
//             return response.status;
//         }
//     } catch (error) {
//         console.error('An error occurred:', error);
//         return  null;
//     }
// }

//   // async testLogin () {
//   //   const CLIENT_ID = "385492911016970"

//   //   const params = {
//   //     client_id: CLIENT_ID,
//   //     client_secret: CLIENT_SECRET,
//   //     grant_type: 'authorization_code',
//   //     redirect_uri: REDIRECT_URI,
//   //     code: code
//   // };

//   // try {
//   //     const response = await axios.post('https://api.instagram.com/oauth/access_token', querystring.stringify(params));

//   //     const accessToken = response.data.access_token;
//   //     const userId = response.data.user_id;

//   //     // Folosește accessToken pentru a face cereri către Graph API pentru a accesa datele contului de Instagram al utilizatorului

//   //     res.send('Conectat cu succes la contul de Instagram!');
//   //   } catch (error) {
//   //       console.error('Eroare la conectare:', error);
//   //       res.status(500).send('A apărut o eroare la conectare.');
//   //   }
//   // }

//   async getAccessToken () {
//     const APP_TOKEN = "385492911016970"
//     const APP_SECRET = "52a717fd6600d9a1d8d8cc964632b75d"

    
//     try {
//       const response = await axios.get(`https://graph.instagram.com/oauth/access_token?client_id=${APP_TOKEN}&client_secret=${APP_SECRET}&grant_type=client_credentials`);
      
//       // Verificăm dacă cererea a fost realizată cu succes
//       if (response.status === 200) {
//           const accessToken = response.data.access_token;
//           console.log('Access Token:', accessToken);
//       } else {
//           console.error('Eroare la obținerea Access Token:', response.status);
//       }
//   } catch (error) {
//       console.error('A apărut o eroare:', error);
//   }
//   }

}
