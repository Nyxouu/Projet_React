import { useState } from "react"
import CreatureCard from './CreatureCard.jsx';
import "./PointCard.css";

export default function pointCard({creature}) {
    const pointStyle = {
        position : 'absolute', 
        top : '0',
        left: creature.y + '%',
        transform: `translateY(calc(${creature.x}vw * 0.66))`, // ← important : x basé sur largeur de l'écran
    }
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="content-home">
            <div onClick={toggleVisibility} style={pointStyle}>
                <img src="./logos/icon-fenix.png" alt="Icon Fenix" />
            </div>
            {isVisible ?
                <div className="card-visible">
                  <img className="cross" onClick={toggleVisibility} src="./logos/croix-blanche.png" alt="Icon Croix" />
                  <div className="card-style">
                    <CreatureCard
                      key={creature.id}
                      breed={creature.breed}
                      type={creature.type}
                      size={creature.size}
                      intelligence={creature.intelligence}
                      element={creature.element}
                      habitat={creature.habitat}
                      alignment={creature.alignment}
                      lifespan={creature.lifespan}
                      pictureUrl={creature.pictureUrl}
                    />
                  </div>
              </div> : null}
        </div>
    );
}

