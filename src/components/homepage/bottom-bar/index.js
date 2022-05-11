import React from 'react';
import { FullMenu, MenuButton, MenuOption, MenuTitle } from './style'
import { useNavigate } from "react-router-dom";
import add from './../../../assets/add.png'
import dairy from './../../../assets/dairy.png'
import details from './../../../assets/details.png'
import home from './../../../assets/home.jpg'

const Menu = () => {
    let navigate = useNavigate();
    return (
        <FullMenu>
            <MenuOption>
                <MenuButton image={add} onClick={() => navigate("/inventory")} />
                <MenuTitle>תפריט</MenuTitle>
            </MenuOption>
            <MenuOption>
                <MenuButton image={dairy} onClick={() => navigate("/dairy")} />
                <MenuTitle>יומן</MenuTitle>
            </MenuOption>
            <MenuOption>
                <MenuButton image={details} onClick={() => navigate("/details")} />
                <MenuTitle>נתונים</MenuTitle>
            </MenuOption>
            <MenuOption>
                <MenuButton image={home} onClick={() => navigate("/")} />
                <MenuTitle>ראשי</MenuTitle>
            </MenuOption>
        </FullMenu>
    );
};

export default Menu;