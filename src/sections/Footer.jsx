import FooterCard from "../components/FooterCard.jsx";
import footerCardData from "../footerCardData.js";
import "./Footer.css";



export default function Footer(){
    return (
    <div className="footer-contain padding"> 
        {footerCardData.map((card) => (
            <FooterCard
                key={card.key}
                logo={card.logo}
                title={card.title}
                info1={card.info1}
                info2={card.info2}
                info3={card.info3}
            />
        ))}            
    </div>
    );
};