import "./Map.css"
import { useState, useMemo } from "react"
import creaturesData from "../creaturesData.js"
import PointCard from "../components/PointCard.jsx"
import Filters from "../filters/Filters.jsx"

export default function Map() {
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
    <div class="content padding">
      <Filters setAlignment={setAlignment} setElement={setElement} setType={setType}/>
      <div id="creature-gallery">
        {filteredCreatures.length === 0 ? (
              <p class="text-error" >Aucune créature ne correspond.</p>
            ) : (
              filteredCreatures.map(creature => (
          <PointCard creature={creature}/>
        )))}
      </div>
    </div>
  )

}