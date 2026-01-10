import { useNavigate } from "react-router-dom";

export function Auth() {
  const navigate = useNavigate();

  function handleLogin() {
    // todo:
    navigate("/");
  }

  return (
    <div className="p-4 border rounded">
      <h2> Authentication</h2>

      <button onClick={handleLogin()}>Login</button>
    </div>
  );
}
