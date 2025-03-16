import { ImgHTMLAttributes } from "react";
import "./CreatureCard.css";

export default function CreatureCard({ breed, type, size, intelligence, element, habitat, alignment, lifespan, pictureUrl }){
    return (
        <div className="cardStyle">
            <div className="title-card">
                <h2>{breed}</h2>
                {element && (
                    <img className="element-picture" src={element} alt="element" />
                )}
            </div>
            <div className="image">
                <img
                className="creature-picture"
                src={pictureUrl}
                alt="Creature"
                />
            </div>
            <div className="creature-description">
                <p className="creature-description-line"> <u>Type :</u> {type}</p>
                <p className="creature-description-line"> <u>Taille :</u> {size}</p>
                <p className="creature-description-line"> <u>Intelligence :</u> {intelligence}</p>
                <p className="creature-description-line"> <u>Habitat :</u> {habitat}</p>
                <p className="creature-description-line"> <u>Alignement :</u> {alignment}</p>
                <p className="creature-description-line"> <u>Espérence de vie :</u> {lifespan}</p>
            </div>
        </div>
    );
};
