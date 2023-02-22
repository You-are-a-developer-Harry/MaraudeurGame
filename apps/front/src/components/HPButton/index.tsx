import { HPButtonProps } from "./type";
import styles from "./style.module.css";

export const HPButton = (props: HPButtonProps) => {
  return (
    <div className={styles.btnHome} onClick={() => props.onClick()}>
      {props.children}
    </div>
  )
}
