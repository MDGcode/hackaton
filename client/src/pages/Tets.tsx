import { BackendService } from "@genezio-sdk/hackaton";

const Tets = () => {
    const handleSubmit = async () => {
        const data = new Date();
        data.setMinutes(data.getMinutes() + 0);
        // const response = await  BackendService.createPost(data, "text_only", "Twitter", "https://picsum.photos/800/800", "salutare");
        // const response = await  BackendService.createPost(data, "STORY", "Instagram", "https://picsum.photos/800/800", "salutare");
        // const response = await  BackendService.createPost(data, "POST", "Instagram", "https://picsum.photos/800/800", "salutare");

        // const response = await BackendService.updateIgCredentials("123", "123")
        // const response = await BackendService.updateTwitterCredentials("2313", "12313", "!@312", "1231");

        // console.log(response);
    }
    
      return (
        <div>
          {/* Interfața utilizatorului pentru componentă */}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
}

export default Tets
