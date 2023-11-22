/* eslint-disable react/jsx-no-undef */
// import { Button } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;
