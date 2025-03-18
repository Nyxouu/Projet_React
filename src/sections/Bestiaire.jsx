import "./Bestiaire.css";
import { useState, useMemo } from "react"
import creaturesData from "../creaturesData.js";
import CreatureCard from '../components/CreatureCard.jsx';
import Filters from "../filters/Filters.jsx";

export default function Bestiaire() {

    const [selectedCardCreature, setSelectedCardCreature] = useState(null);
    const [alignment, setAlignment] = useState('all-alignment');
    const [element, setElement] = useState('all-element');
    const [type, setType] = useState('all-type');

    // Fonction pour afficher une créature sélectionnée
    const toggleVisibility = (creature) => {
      setSelectedCardCreature(creature);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Tableau avec les créatures filtrées
    const filteredCreatures = useMemo(() => {
        return creaturesData.filter(creature => {
          const matchesAlignment = alignment === 'all-alignment' || creature.alignment.includes(alignment);
          const matchesElement = element === 'all-element' || creature.element.includes(element);
          const matchesType = type === 'all-type' || creature.type.includes(type);
          return matchesAlignment && matchesElement && matchesType;
        });
      }, [alignment, element, type]);
  

  return (
    <div className="bestiaire-content padding">
      <Filters setAlignment={setAlignment} setElement={setElement} setType={setType}/>
            {selectedCardCreature ?
                <div className="card-description-visible">
                    <div className="description-style">
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
                        <h2 className="titledes-cription">{selectedCardCreature.titledescription}</h2>
                        <p className="text-description">{selectedCardCreature.description}</p>
                    </div>
                </div> : null}
                <div id="creature-gallery">
                  {filteredCreatures.length === 0 ? (
                      <p>Pas de creature trouvée</p>
                    ) : (
                      filteredCreatures.map(creature => (
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
                      ))
                    )}
                </div>
      
    </div>
  )

}






