import { ImgHTMLAttributes } from "react";
import "./FooterCard.css";

export default function FooterCard({logo, title, info1, info2, info3}){
    return (
        <div className="cardFooter">
            <div className="logo-card">
                <img
                className="logo"
                src={logo}
                alt="Logo"
                />
            </div>
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="card-infos">
                <p className="card-description"> {info1}</p>
                {info1 && (<p className="card-description"> {info2}</p>)}
                {info2 && (<p className="card-description"> {info3}</p>)}
            </div>
        </div>
    );
};

