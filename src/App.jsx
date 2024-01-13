import React from "react";
import Card from "./Components/Card";
import './index.css'

const App = () => {
  const data = [
    {log: '/Vazifa uchun/iconoir_flash.svg', title: "Reaction", sort: 80},
    {log: '/Vazifa uchun/iconoir_brain.svg', title: "Memory", sort: 92},
    {log: '/Vazifa uchun/iconoir_chat-remove.svg', title: "Verbal", sort: 61},
    {log: '/Vazifa uchun/iconoir_eye-empty.svg', title: "Visual", sort: 73},
  ]
  return (
    <div className="main">
      <div className="cards">
        <h3 className="cards_h3">Your Result</h3>
        <div className="cards_radius">
          <h1 className="cards_item">76</h1>
          <span className="cards_item_2">of 100</span>
        </div>
        <h3 className="cards_list">Great</h3>
        <p className="cards_p">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
      <div className="main_two">
        <h2 className="main_two_gap">Summary</h2>
        <div className="main_three">
          {data.map((item)=>(
            <Card {...item}/>
          ))}
        </div>
        <button className="main_four">Countinue</button>
      </div>
    </div>
  );
};

export default App;
