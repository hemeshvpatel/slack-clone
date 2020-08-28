import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM naming convention (http://getbem.com/naming/)
    <div className="app">
      <h1>Let's build a Slacks Clone 🚀</h1>
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* {React-Router -> Chat screen} */}
      </div>
    </div>
  );
}

export default App;
