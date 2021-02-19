import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { NewUserInput, useRegisterMutation } from "../generated/graphql";

export const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log("form submitted");
        const userData: NewUserInput = {
          email: email,
          password: password,
        };
        const response = await register({
          variables: {
            userData,
          },
        });

        console.log(response);
        history.push("/");
      }}
    >
      <div>
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
