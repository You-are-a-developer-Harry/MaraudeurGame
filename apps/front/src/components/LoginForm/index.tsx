import React, { useState } from "react";
import styles from "./style.module.css";
import { useUserStore } from "@stores/UserStore";


export function LoginForm({ onSubmit, setIsConnected}: any) {

  const setUser = useUserStore(state => state.setUser);
  const setApiData = useUserStore(state => state.setApiData);
  
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch('https://hp-api-iim.azurewebsites.net/auth/log-in', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error || data.statusCode == 500) {
          setError(data.error);
        } else {
          // Handle successful login
          console.log(data)
          setUser({...data.user, objects: []});
          setApiData(data.apiData);
          setIsConnected(true)
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        console.log(name + ' and ' + password)
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Name"
            type="user"
            id="name"
            value={name}
            onChange={(event) => setname(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button className={styles.btnHome} type="submit">
          Submit
        </button>
        <a
          href="https://hp-leaderboard.netlify.app/signup/"
          target="_blank"
          rel="noopener noreferrer"
        >Sign up</a>
      </form>
    </div>
  )
}

export default LoginForm;
