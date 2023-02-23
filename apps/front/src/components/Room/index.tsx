import styles from "./style.module.css";
import { useState } from "react";
import { useUserStore } from "@stores/UserStore";

export function Room({ setRoomChosen }: any) {
    const [roomValue, setRoomValue] = useState("");
    const setRoom = useUserStore(state => state.setRoom);

    const handleRoom = (event: any) => {
        event.preventDefault();
        setRoomChosen(true);
        setRoom(roomValue)
    };

    const handleRoomValueChange = (event: any) => {
        setRoomValue(event.target.value); // On met à jour l'état local avec la valeur de l'input
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleRoom}>
                <input type="text" name="room" id="room" placeholder="Choose your room" value={roomValue} onChange={handleRoomValueChange} />
                <button className={styles.btnHome} type="submit">Join the game</button>
            </form>
        </div>
    );
}
