import react from "react";

function Login() {
  function handleform(e) {
    e.preventDefault();
  }
  return (
    <div id="login-modal">
      <div className="login-warper">
        <h1>Login to trello</h1>
        <form onSubmit={handleform}>
          <input type="text" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter your Password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
