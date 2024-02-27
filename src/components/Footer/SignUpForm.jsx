import { useState } from "react";
import "./Footer.css";

export default function SignUpForm() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignup = () => {
    setEmail("");
  };
  return (
      <div className="signUp-style">
        <input
          type="email"
          placeholder="Input Email Address"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
  );
}
