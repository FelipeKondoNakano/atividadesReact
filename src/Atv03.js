import Avatar from "./Components/Avatar";
import Gallery from "./Components/Gallery";
import { Link } from "react-router-dom";
import TodoList from "./Components/TodoList";

export default function Atv03() {
    return (
        <>
            <h1>Atividade 3</h1>
            <Gallery />
            <Avatar />
            <TodoList />

            <Link to="/" className="voltar-home">Home</Link>
        </>
    );
}