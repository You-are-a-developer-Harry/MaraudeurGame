import styles from "./style.module.css";
import { InventoryItemProps } from "./types";

export const InventoryItem = (props: InventoryItemProps) => {
  return (
    <div className={styles.buttonWrapper}>
      {props.image && (
        <img
          height="80px"
          width="80px"
          src={props.image}
          alt={'-img'}
        />
      )}
    </div>
  )
}
