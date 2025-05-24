import { Link } from "react-router-dom";
import ToolBar from "./Components/ToolBar";
import SculptureGallery from "./Components/Gallery";
import Gallery from "./Components/CreateRoot";
import ClockApp from "./Components/ClockApp";
import Form from "./Components/Form";
import Form2 from "./Components/Form2";
import Form3 from "./Components/Form3";
import Counter from "./Components/Counter";
import MovingDot from "./Components/MovingDot";
import List from "./Components/List";
import List2 from "./Components/List2";
import ShapeEditor from "./Components/ShapeEditor";
import CounterList from "./Components/CounterList";
import List3 from "./Components/List3";
import List4 from "./Components/List4";
import BucketList from "./Components/BucketList";


export default function Atv04() {
    return (
        <>
            <h1>Atividade 4</h1>
            <ToolBar/>
            <SculptureGallery/>
            <Gallery/>
            <ClockApp/>
            <Form/>
            <Form2/>
            <Form3/>
            <Counter/>
            <MovingDot/>
            <List/>
            <List2/>
            <List3/>
            <List4/>
            <ShapeEditor/>
            <CounterList/>
            <BucketList/>
            <Link to="/" className="voltar-home">Home</Link>
        </>
    )
}