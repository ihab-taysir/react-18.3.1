import "./style.css";
import ROLES from "../../Constants/ROLES";
import { useAuthContext } from "../../contexts/authContext";

const HomePage = () => {
  const data = useAuthContext();
  console.log(data);

  return (
    <>
      <div className="home">
        <h1>Home</h1>
        <p>Welcome to our website {data.role}</p>
        <div className="button-group">
          <button
            style={{ margin: "0 10px" }}
            onClick={() => data.setRole(ROLES.ADMIN)}
          >
            Be admin
          </button>
          <button
            style={{ margin: "0 10px" }}
            onClick={() => data.setRole(ROLES.USER)}
          >
            Be user
          </button>
          <button
            style={{ margin: "0 10px" }}
            onClick={() => data.setRole(ROLES.GUEST)}
          >
            Be guest
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
