import "./Header.css";

export default function Header(){
    return (
        <div class="header padding">
            <h1>Le Monde d'Orion</h1>
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
                    <li>Légendes&Histoires</li>
                    <li>Bestiaire</li>
                </ul>
            </div>
           
        </div>
    );
};