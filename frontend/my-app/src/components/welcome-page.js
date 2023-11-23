import "./welcome-page.css";
import React from "react";
import { useNavigate } from "react-router-dom";


const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="banniere">
            <div className="welcome-container">
                <p>Déposez une image de votre feuille de vigne et notre IA diagnostiquera sa santé en un clin d'oeil</p>
                <button onClick={() => navigate('home-page')}>Entrer</button>
            </div>
        </div>
    );
}

export default WelcomePage;


