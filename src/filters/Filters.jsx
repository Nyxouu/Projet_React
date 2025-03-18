import { useState } from "react";
import "./Filters.css";

export default function FilterBanner({setGenre}) {

  return (
    <div id="filters-banner">

      <div id="alignment-filter">
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="all-alignment">Alignements</option>
          <option value="bon">Bon</option>
          <option value="neutre">Neutre</option>
          <option value="mauvais">Mauvais</option>
        </select>
      </div>

      <div id="element-filter">
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="all-elements">Elements</option>
          <option value="eau">Eau</option>
          <option value="feu">Feu</option>
          <option value="vent">Vent</option>
          <option value="nature">Nature</option>
          <option value="lumiere">Lumière</option>
          <option value="tenebre">Ténèbre</option>
        </select>
      </div>

      <div id="type-filter">
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="all-types">Types</option>
          <option value="neutre">Neutre</option>
          <option value="magique">Magique</option>
          <option value="guerrier">Guerrier</option>
          <option value="gardien">Gardien</option>
          <option value="divin">Divin</option>
          <option value="demon">Demon</option>
        </select>
      </div>

      <div id="habitat-filter">
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
      </div>

      <div id="size-filter">
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="all-size">Tailles</option>
          <option value="minuscule">Minuscule</option>
          <option value="petit">Petit</option>
          <option value="moyen">Moyen</option>
          <option value="grand">Grand</option>
          <option value="colossal">Colossal</option>
        </select>
      </div>

      <div id="lifespan-filter">
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="all-lifespan">Espérance de vie</option>
          <option value="petit">Mortel</option>
          <option value="moyen">Elevée</option>
          <option value="grand">Immortel</option>
        </select>
      </div>
    </div>
  )
}
