import { useState } from "react"
import CreatureCard from './CreatureCard.jsx';
import "./PointCard.css";

export default function pointCard({creature}) {

  // const [ isHover, setIsHover ] = useState(false) 

  const pointStyle = {
      position : 'absolute', 
      top : creature.x + '%',
      left: creature.y + '%',
  }

  // return (
  //   <div>
  //     <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} style={pointStyle}><img src="./logos/icon-fenix.png"/></div>
  //     { isHover ?          
  //       <CreatureCard
  //             key={creature.id}
  //             breed={creature.breed}
  //             type={creature.type}
  //             size={creature.size}
  //             intelligence={creature.intelligence}
  //             element={creature.element}
  //             habitat={creature.habitat}
  //             alignment={creature.alignment}
  //             lifespan={creature.lifespan}
  //             pictureUrl={creature.pictureUrl}
  //           /> : null }
  //   </div>
  //)
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <div onClick={toggleVisibility} style={pointStyle}>
                <img src="./logos/icon-fenix.png" alt="Icon Fenix" />
            </div>
            {isVisible ?
                <div className="CardVisible">
                  <img className="cross" onClick={toggleVisibility} src="./logos/croix-blanche.png" alt="Icon Croix" />
                  <div className="cardstyle">
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
              </div> : null}
        </div>
    );
}

