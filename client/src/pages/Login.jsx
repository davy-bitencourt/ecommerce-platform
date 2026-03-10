import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Barra from "../components/Barra.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import "../styles/styles.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const { user, login, error } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    const success = login(usuario, senha);
    if (success) { 
      navigate("/");
    } 
  };

  return (
    <>
      <Barra />
      <div>
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input 
            type="text" 
            placeholder="Usuário" 
            value={usuario} 
            onChange={(e) => setUsuario(e.target.value)} required
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} required
          />
          <Link to="/cadastro"> Criar uma conta, caso não haja uma </Link>
          <button type="submit" className="btn">Entrar</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </>
  );
}

export default Login;