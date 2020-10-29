import './App.css';
import React from "react";
import Header from "./components/Header";
import {Balance} from "./components/Balance";
import {IncomeExpenses} from "./components/IncomeExpenses";

function App() {
  return (
    <div className="App">
        <Header/>
        <Balance/>
        <IncomeExpenses/>
    </div>
  );
}

export default App;
