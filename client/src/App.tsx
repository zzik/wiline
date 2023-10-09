import React from "react";
import Homepage from "./Homepage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // fetching library
import "./style.css";

// react query instance
const queryClient = new QueryClient();

function App() {
  // top most react query component
  return (
    <QueryClientProvider client={queryClient}>
      <Homepage />
    </QueryClientProvider>
  );
}

export default App;
