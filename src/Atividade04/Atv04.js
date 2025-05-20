import { Link } from "react-router-dom";
import ToolBar from "./Components/ToolBar";
import SculptureGallery from "./Components/SculptureGallery";
import Gallery from "./Components/CreateRoot";
import ClockApp from "./Components/ClockApp";


export default function Atv04() {
    return (
        <>
            <h1>Atividade 4</h1>
            <ToolBar/>
            <SculptureGallery/>
            <Gallery/>
            <ClockApp/>
            <Link to="/" className="voltar-home">Home</Link>
        </>
    )
}