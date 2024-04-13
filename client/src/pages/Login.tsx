import { useState } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { AuthService } from "@genezio/auth";
import { useNavigate } from "react-router-dom";
import { BackendService } from "@genezio-sdk/hackaton";
import { FiActivity } from "react-icons/fi";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [googleLoginLoading, setGoogleLoginLoading] = useState(false);

  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    setGoogleLoginLoading(true);
    try {
      await AuthService.getInstance().googleRegistration(
        credentialResponse.credential!
      );
      const response = await BackendService.createAccount();
      console.log(response);
      console.log("Login Success");
      navigate("/");
    } catch (error: any) {
      console.log("Login Failed", error);
      alert("Login Failed");
    }

    setGoogleLoginLoading(false);
  };

  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-[#524AA4] to-[#3B3199]">
      <div>
        <FiActivity size={200} className="bg-[#FAE043] rounded-full mb-24" />
        <div className="form-container scale-150 ">
          {googleLoginLoading ? (
            <p>Loading...</p>
          ) : (
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                handleGoogleLogin(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
                alert("Login Failed");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;