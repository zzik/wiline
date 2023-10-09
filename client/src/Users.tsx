// main http component 
import React from "react";
import { useQuery } from "@tanstack/react-query";

// typescript inference
interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
// helper function
const userData = async (): Promise<User[]> => {
  const response = await fetch("http://127.0.0.1:5500/users");
  const usersData = await response.json();
  return usersData;
};

// react query API and http call
const Users: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: userData,
  });

  return (
    <section className="display">
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Fetch failed</p>
      ) : 
      // implementing display-based reusability should start here
      (
        <ul>
          {data.map((user) => (
            <div key={user._id}>
              <section className="profile-section" id="top">
                <p>E-mail: {user.email}</p>
                <p>Phone :{user.phoneNumber}</p>
              </section>
              <section className="profile-section" id="bottom">
                <p>
                  Name : {user.firstName} {user.lastName}
                </p>
              </section>
            </div>
          ))}
        </ul>
      )}
    </section>
  );
};
export default Users;
