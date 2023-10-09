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
