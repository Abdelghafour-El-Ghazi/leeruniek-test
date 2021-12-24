import React from "react";
import AppBar from "./components/AppBar";
import Plan from "./components/Plan";
import Main from "./components/Main";

const App = () => {
  return (
    <div className='container'>
      <AppBar />
      <Plan />
      <Main />
    </div>
  );
};

export default App;
