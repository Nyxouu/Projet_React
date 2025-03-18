import "./Header.css";
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <div class="header padding">
            <h1><Link to="/">Le Monde de l'Orion</Link></h1>
            <div className="menu">
                <ul  class="filters">
                    <li><Link to="/histoire-et-legendes">Histoires&Légendes</Link></li>
                    <li><Link to="/map">Carte</Link></li>
                    <li><Link to="/bestiaire">Bestiaire</Link></li>
                </ul>
            </div>
           
        </div>
    );
};