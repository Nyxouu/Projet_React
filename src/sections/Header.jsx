import "./Header.css";
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <div class="header padding">
            <h1><Link to="/">Le Monde de l'Orion</Link></h1>
            <div className="menu">
                 <ul  class="filters">
                    <li>Alignement</li>
                    <li>Elements</li>
                    <li>Types</li>
                    <li>Habitats</li>
                    <li>Régions</li>
                </ul>
                <ul  class="filters">
                    <li style={{fontSize: "25px"}}>|</li>
                    <li><Link to="/histoire-et-legendes">Histoires&Légendes</Link></li>
                    <li><Link to="/bestiaire">Bestiaire</Link></li>
                </ul>
            </div>
           
        </div>
    );
};