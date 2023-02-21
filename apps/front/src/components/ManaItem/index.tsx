import * as styles from "./style.module.css";
import { ManaProps } from "./types";
import ManaImage from "../../assets/images/btnMana.png"
import { useState } from "react";


export const ManaItem = (props: ManaProps) => {

    // props.isUsed = false;

    return (
        <img 
        src={ManaImage} 
        alt={"mana-item"} 
        className={props.isUsed ? styles.manaItemDisabled : styles.manaItem} 
        height={"80px"}
        />
    )
}
