import react from "react";
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello world</h1>
      <p>this's Project screen</p>
      <button
        onClick={() => {
          navigate("todolist");
        }}
      >
        go to Tolist
      </button>
    </div>
  );
}

export default Project;
