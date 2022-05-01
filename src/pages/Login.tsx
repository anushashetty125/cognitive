import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Login.css"

const Login = () => {
  const location: any = useLocation();
  console.log("Location is", location);

  return (
    <body>
      <div>
        <h1>Login Page: {location.state.id}</h1>
        <div>
          <h3 style={{marginTop: "7rem", marginLeft: "35rem"}}>Welcome to your React Journey</h3>
        </div>
        <img src={logo} className="rotate" style={{ marginTop: "4rem", marginLeft: "37rem"}}/>
      </div>
    </body>
  );
};

export default Login;