import "./Header.css";
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <div class="header padding">
            <h1><Link to="/">Le Monde de l'Orion</Link></h1>
            <div className="content-menu">
                <ul  class="menu">
                    {/* <li><Link to="/histoire-et-legendes">Histoires&Légendes</Link></li> */}
                    <li id="map-page"><Link to="/map">Carte</Link></li>
                    <li><Link to="/bestiaire">Bestiaire</Link></li>
                </ul>
            </div>
           
        </div>
    );
};