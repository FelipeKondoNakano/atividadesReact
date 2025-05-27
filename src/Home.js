import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Página Inicial</h1>
            <nav className="home-nav">
                <Link to="/Atv01" className="home-link">Atividade 1</Link>
                <Link to="/Atv02" className="home-link">Atividade 2</Link>
                <Link to="/Atv03" className="home-link">Atividade 3</Link>
                <Link to="/Atv04" className="home-link">Atividade 4</Link>
                <Link to="/Atv05" className="home-link">Atividade 5</Link>
            </nav>
        </div>
    );
}

export default Home;