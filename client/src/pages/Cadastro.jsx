import Barra from "../components/Barra.jsx";
import "../styles/styles.css";

export default function Cadastro(){
    return (
    <div>
        
        <Barra/>

        <form>
            <h2> Cadastro </h2>
            <input className="b" type="text" placeholder="Nome de Usuário"/>
            <input className="b" type="text" placeholder="E-mail"/>
            <input className="b" type="password" placeholder="Senha"/>
            <input className="b" type="password" placeholder="Confirmar Senha"/>

            <label className="m">
                <input type="checkbox" className="check"/> 
                <small>Li e Concordo com os Termos e Condições</small>
            </label>

            <button className="botao"> Criar Conta </button>
        </form>
    </div>
    )
}