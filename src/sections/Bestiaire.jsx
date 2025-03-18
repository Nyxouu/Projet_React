import "./Bestiaire.css";
import { useState, useMemo } from "react"
import creaturesData from "../creaturesData.js";
import CreatureCard from '../components/CreatureCard.jsx';
import Filters from "../filters/Filters.jsx";
import "@fontsource/medievalsharp";

export default function Bestiaire() {

    const [selectedCardCreature, setSelectedCardCreature] = useState(null);
    const [alignment, setAlignment] = useState('all-alignment');
    const [element, setElement] = useState('all-element');
    const [type, setType] = useState('all-type');
    const [appliedFiltersOrder, setAppliedFiltersOrder] = useState([]);

    // Fonction pour afficher une créature sélectionnée
    const toggleVisibility = (creature) => {
      setSelectedCardCreature(creature);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Fonction pour mettre à jour les filtres et leur ordre d'application
    const updateFilter = (filterName, value) => {
      // Met à jour la valeur du filtre
      if (filterName === "alignment") setAlignment(value);
      if (filterName === "element") setElement(value);
      if (filterName === "type") setType(value);

      // Ajoute le filtre dans l'ordre s'il n'y est pas encore
      setAppliedFiltersOrder(prevOrder => {
          if (!prevOrder.includes(filterName)) {
              return [...prevOrder, filterName]; // On l'ajoute à la fin
          }
          return prevOrder; // Sinon, on ne change rien
      });
  };

    // Tableau avec les créatures filtrées
    const filteredCreatures = useMemo(() => {
      return creaturesData
        .map(creature => {
            // Calcul du score en fonction du nombre de filtres correspondants
            let score = 0;
            if (alignment === 'all-alignment' || creature.alignment.includes(alignment)) score++;
            if (element === 'all-element'|| creature.element.includes(element)) score++;
            if (type === 'all-type'|| creature.type.includes(type)) score++;

            return { ...creature, score }; // Ajoute le score à chaque créature
        })
        .filter(creature => creature.score > 0)
        .sort((a, b) => b.score - a.score); // Tri par pertinence (score élevé en premier)
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






