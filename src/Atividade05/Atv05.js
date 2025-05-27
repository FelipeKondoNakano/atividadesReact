import { Link } from 'react-router-dom';
import FormQuiz from './Components/FromQuiz';
import FormTicket from './Components/FormTicket';
import Accordion from './Components/Accordion';
import Messenger from './Components/Messenger';

export default function Atv05() {
    return (
        <>
            <h1>Atividade 5</h1>
            <FormQuiz />
            <FormTicket />
            <Accordion />
            <Messenger />
            <Link to="/" className="voltar-home">Home</Link>
        </>
    );
}