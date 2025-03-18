import "./Map.css";
import creaturesData from "../creaturesData.js";
import PointCard from "../components/PointCard.jsx";
import Filters from "../filters/Filters.jsx";

export default function Map() {
  return (
    <div class="content padding">
      <Filters/>
      <div id="creature-gallery">
        {creaturesData.map((creature) => (
          <PointCard creature={creature}/>
        ))}
      </div>
    </div>
  )

}