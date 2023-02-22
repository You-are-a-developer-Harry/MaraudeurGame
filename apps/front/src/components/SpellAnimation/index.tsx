import style from "./style.module.css";
import Spell from "../../assets/images/spells/spell1.png"
import { SpellAnimationProps } from "./type";

export const SpellAnimation = (props: SpellAnimationProps) => {

  return (
    <div className={style.mainWrapper}>
      <div className={style.content}>
        <h1>{props.spell.name} !!!</h1>
        <div>
          <div className={style.halo}></div>
          <div className={style.flipCard}>
            <div className={style.flipCardInner}>
              <div className={style.flipCardFront}>
                <img src={Spell} alt="spell-card" height="90%"/>
              </div>
              <div className={style.flipCardBack}>
                <img src={Spell} alt="spell-card" height="90%"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
