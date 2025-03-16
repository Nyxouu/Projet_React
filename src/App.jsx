import "./App.css";
import creaturesData from "./creaturesData.js";
import PointCard from "./components/PointCard.jsx";
import "@fontsource/medievalsharp";

export default function APP() {
  return (
    <div class="content">
      <div id="creature-gallery">
        {creaturesData.map((creature) => (
          <PointCard creature={creature}/>
        ))}
      </div>
    </div>
  )

}