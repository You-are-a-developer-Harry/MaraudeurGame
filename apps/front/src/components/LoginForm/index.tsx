import React, { useState } from "react";
import styles from "./style.module.css";


export function LoginForm({ onSubmit, setIsConnected}) {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://hp-api-iim.azurewebsites.net/auth/log-in', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          // Handle successful login
          console.log(name + ' ' + password)
          console.log(data)
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
      <button className={styles.btnHome} type="submit">Submit</button>
    </form>
    </div>
    
  );
}

export default LoginForm;
