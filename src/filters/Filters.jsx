import { useState } from "react";
import "./Filters.css";

export default function FilterBanner({setAlignment, setElement, setType}) {

  return (
    <div id="filters-banner">

      <div id="alignment-filter">
        <select onChange={(e) => setAlignment(e.target.value)}>
          <option value="all-alignment">Alignements</option>
          <option value="Bon">Bon</option>
          <option value="Neutre">Neutre</option>
          <option value="Mauvais">Mauvais</option>
        </select>
      </div>

      <div id="element-filter">
        <select onChange={(e) => setElement(e.target.value)}>
          <option value="all-elements">Elements</option>
          <option value="eau">Eau</option>
          <option value="feu">Feu</option>
          <option value="terre">Terre</option>
          <option value="air">Air</option>
          <option value="nature">Nature</option>
          <option value="lumiere">Lumière</option>
          <option value="tenebre">Ténèbre</option>
        </select>
      </div>

      <div id="type-filter">
        <select onChange={(e) => setType(e.target.value)}>
          <option value="all-types">Types</option>
          <option value="Neutre">Neutre</option>
          <option value="Guerrier">Guerrier</option>
          <option value="Magique">Magique</option>
          <option value="Gardien">Gardien</option>
          <option value="Divin">Divin</option>
          <option value="Demon">Demon</option>
        </select>
      </div>

      {/* <div id="habitat-filter">
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="all-habitats">Habitats</option>
          <option value="pop">Forets</option>
          <option value="k-pop">Océans</option>
          <option value="k-pop">Montagnes</option>
          <option value="k-pop">Collines</option>
          <option value="k-pop">Sousterrains</option>
          <option value="rock">Cités Antiques</option>
          <option value="k-pop">Forets Maudites</option>
          <option value="k-pop">Terres Maudites</option>
        </select>
      </div> */}

      {/* <div id="size-filter">
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="all-size">Tailles</option>
          <option value="minuscule">Minuscule</option>
          <option value="petit">Petit</option>
          <option value="moyen">Moyen</option>
          <option value="grand">Grand</option>
          <option value="colossal">Colossal</option>
        </select>
      </div> */}

      {/* <div id="lifespan-filter">
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="all-lifespan">Espérance de vie</option>
          <option value="petit">Mortel</option>
          <option value="moyen">Elevée</option>
          <option value="grand">Immortel</option>
        </select>
      </div> */}
    </div>
  )
}
