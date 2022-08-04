import React from "react";
import style from './App.module.css';
import HeadInfo from "./components/HeadInfo/HeadInfo";
import Obout from "./components/OboutMy/Obout";
import Hobby from "./components/Hobby/Hobby";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className={style.bgC}>
        <div className={style.App}>
            <HeadInfo />
            <Obout />
            <Hobby />
            <Works />
            <Contact />
        </div>
    </div>
  );
}

export default App;
