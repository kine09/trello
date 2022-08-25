import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <ul>
        <li>
          <button
            onClick={() => {
              navigate("login");
            }}
          >
            Login
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("project");
            }}
          >
            Project
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              navigate("todolist");
            }}
          >
            Project
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
