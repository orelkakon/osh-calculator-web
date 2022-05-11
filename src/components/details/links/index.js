import React from 'react';
import { LinksDiv } from "./style"
import link from "./../../../assets/link.png"

const Links = () => {
    return (
        <LinksDiv>
            <a href="https://en.wikipedia.org/wiki/Basal_metabolic_rate" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '20px',  marginRight: '10px' }}>
                <img src={link} alt="BMR" style={{ width: "85px", height: "85px" }} />
                <br />
                <b>BMR</b>
            </a>
            <a href="https://he.wikipedia.org/wiki/%D7%9E%D7%93%D7%93_%D7%9E%D7%A1%D7%AA_%D7%92%D7%95%D7%A3" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black', fontSize: '20px',  marginLeft: '10px' }}>
                <img src={link} alt="BMI" style={{ width: "85px", height: "85px" }} />
                <br />
                <b>BMI</b>
            </a>
        </LinksDiv>
    );
};

export default Links;