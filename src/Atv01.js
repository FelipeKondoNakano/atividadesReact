import Relogio from "./Components/Relogio";
import Letreiro from "./Components/Letreiro";
import { Link } from "react-router-dom";
import "./styles/atv01.css";

export default function Atv01() {
    return(
        <div class="container">
            <header>
                <h1>Atividade 1</h1>
            </header>
            <main>
                <Relogio />
                <Link to="/" className="voltar-home">Home</Link>
                <Letreiro texto="Venha estudar na Fatec!" intervalo={150} delayReinicio={1000}/>
            </main>
        </div>
    )
}