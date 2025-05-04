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
            </nav>
        </div>
    );
}

export default Home;