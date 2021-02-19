import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useUsersQuery } from "../generated/graphql";

export const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const { data, loading, error } = useUsersQuery({
    errorPolicy: "all",
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    //console.log(error);
    return <div>err</div>;
  }

  if (!data) {
    return <div>no data</div>;
  }

  return (
    <div>
      <div>users:</div>
      <ul>
        {data?.users.map((user) => {
          return (
            <li key={user.id}>
              {user.email}, {user.id}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
