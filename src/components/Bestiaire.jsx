import "./Bestiaire.css";
import creaturesData from "../creaturesData.js";
import CreatureCard from './CreatureCard.jsx';
import "@fontsource/medievalsharp";

export default function Bestiaire() {
  return (
    <div className="bestiaire-content padding">
      <div id="creature-gallery">
        {creaturesData.map((creature) => (
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
        ))}
      </div>
      
    </div>
  )

}

