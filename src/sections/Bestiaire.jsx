import "./Bestiaire.css";
import { useState } from "react"
import creaturesData from "../creaturesData.js";
import CreatureCard from '../components/CreatureCard.jsx';
import Filters from "../filters/Filters.jsx";
import "@fontsource/medievalsharp";

export default function Bestiaire() {

    const [selectedCardCreature, setSelectedCardCreature] = useState(null);

    // Fonction pour afficher une créature sélectionnée
    const toggleVisibility = (creature) => {
      setSelectedCardCreature(creature);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  

  return (
    <div className="bestiaire-content padding">
      <Filters/>
            {selectedCardCreature ?
                <div className="CardDescriptionVisible">
                    <div className="descriptionstyle">
                        <CreatureCard
                            breed={selectedCardCreature.breed}
                            type={selectedCardCreature.type}
                            size={selectedCardCreature.size}
                            intelligence={selectedCardCreature.intelligence}
                            element={selectedCardCreature.element}
                            habitat={selectedCardCreature.habitat}
                            alignment={selectedCardCreature.alignment}
                            lifespan={selectedCardCreature.lifespan}
                            pictureUrl={selectedCardCreature.pictureUrl}
                        />
                    </div>
                    <div className="description">
                        <h2 className="titledescription">{selectedCardCreature.titledescription}</h2>
                        <p className="textdescription">{selectedCardCreature.description}</p>
                    </div>
                </div> : null}
        <div id="creature-gallery">
        {creaturesData.map((creature) => (
            <div key={creature.id} onClick={() => toggleVisibility(creature)}>
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
        ))}
      </div>
      
    </div>
  )

}

