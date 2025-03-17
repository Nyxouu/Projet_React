import "./Home.css";
import creaturesData from "../creaturesData.js";
import PointCard from "../components/PointCard.jsx";
import "@fontsource/medievalsharp";

export default function Home() {
  return (
    <div class="content padding">
      <div id="creature-gallery">
        {creaturesData.map((creature) => (
          <PointCard creature={creature}/>
        ))}
      </div>
    </div>
  )

}