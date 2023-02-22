import { SecretObject } from "types";
import styles from "./cell-object.module.css";

type Props = {
  object: SecretObject
}

export function CellObject({ object }: Props) {
  return (
    <div className={styles.cellObject}>
      <img className={styles.cellObjectImg} src={object.image} />
    </div>
  )
}
