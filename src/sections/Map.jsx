import "./Map.css"
import { useState, useMemo, useEffect } from "react"
import creaturesData from "../creaturesData.js"
import PointCard from "../components/PointCard.jsx"
import Filters from "../filters/Filters.jsx"

export default function Map() {
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
    <div class="content-padding">
      <Filters 
        alignment={alignment} 
        element={element} 
        type={type} 
        setAlignment={setAlignment} 
        setElement={setElement} 
        setType={setType} 
      />
      <div id="creature-map-gallery">
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