import "./Header.css";

export default function Header(){
    return (
        <div class="menu padding">
            <h1>Le Monde d'Orion</h1>
            <ul  class="filters">
                <li>Alignement</li>
                <li>Elements</li>
                <li>Types</li>
                <li>Habitats</li>
                <li>Régions</li>
            </ul>
        </div>
    );
};