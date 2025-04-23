import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";
import "./atv01.css";

export default function Atv01() {
    return(
        <div class="container">
            <header>
                <h1>Atividade 1</h1>
            </header>
            <main>
                <Relogio />
                <Link to="/">Home</Link>
                <Letreiro texto="Venha estudar na Fatec!" intervalo={150} delayReinicio={1000}/>
            </main>
        </div>
    )
}