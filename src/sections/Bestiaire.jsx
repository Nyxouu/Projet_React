import "./Bestiaire.css";
import { useState, useMemo, useEffect } from "react"
import creaturesData from "../creaturesData.js"
import CreatureCard from '../components/CreatureCard.jsx'
import Filters from "../filters/Filters.jsx"

export default function Bestiaire() {
    const getStoredFilter = (key, defaultValue) => {
      const stored = localStorage.getItem(key);
      return stored ? stored : defaultValue;
    };

    const [selectedCardCreature, setSelectedCardCreature] = useState(null);
    const [alignment, setAlignment] = useState(() => getStoredFilter('alignment', 'all-alignment'));
    const [element, setElement] = useState(() => getStoredFilter('element', 'all-element'));
    const [type, setType] = useState(() => getStoredFilter('type', 'all-type'));

    // Sauvegarder dans localStorage quand un filtre change
    useEffect(() => {
      localStorage.setItem('alignment', alignment);
    }, [alignment]);

    useEffect(() => {
      localStorage.setItem('element', element);
    }, [element]);

    useEffect(() => {
      localStorage.setItem('type', type);
    }, [type]);

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
      <Filters 
        alignment={alignment} 
        element={element} 
        type={type} 
        setAlignment={setAlignment} 
        setElement={setElement} 
        setType={setType} 
      />
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
                      <p class="text-error" >Aucune créature ne correspond.</p>
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






