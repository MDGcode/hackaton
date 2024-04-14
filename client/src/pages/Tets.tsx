import { BackendService } from "@genezio-sdk/hackaton";

const Tets = () => {
    const handleSubmit = async () => {
        const data = new Date();
        data.setMinutes(data.getMinutes() + 0);
        const response = await  BackendService.createPost(data, "text_only", "Twitter", "https://picsum.photos/800/800", "salutare");
        console.log(response);
    }
    
      return (
        <div>
          {/* Interfața utilizatorului pentru componentă */}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
}

export default Tets
