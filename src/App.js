import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    //BEM naming convention (http://getbem.com/naming/)
    <div className="app">
      <h1>Let's build a Slacks Clone 🚀</h1>

      {/* Header */}
      <Header />
      {/* Sidebar */}
      {/* {React-Router -> Chat screen} */}
    </div>
  );
}

export default App;
