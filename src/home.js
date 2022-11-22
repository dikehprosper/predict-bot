import React from "react";
import "./App.css";
import Typewriter from "typewriter-effect";

function Home() {
  const [red, setRed] = React.useState([]);
  const [green, setGreen] = React.useState([]);
  const [blue, setBlue] = React.useState([]);
  const [messageRed, setMessageRed] = React.useState();
  const [messageGreen, setMessageGreen] = React.useState();
  const [messageBlue, setMessageBlue] = React.useState();
  const [trb, setTrb] = React.useState();
  const [tgb, setTgb] = React.useState();
  const [tbb, setTbb] = React.useState();
  const [instructions, setInstructions] = React.useState(go());
  const [StyleDisplayRed, setStyleDisplayRed] = React.useState();
  const [StyleDisplayGreen, setStyleDisplayGreen] = React.useState();
  const [StyleDisplayBlue, setStyleDisplayBlue] = React.useState();
  const [cal, setCal] = React.useState();
  const [firstStake, setFirstStake] = React.useState();
  const [secondStake, setSecondStake] = React.useState();
  const [thirdStake, setThirdStake] = React.useState();
  const [fourthStake, setFourthStake] = React.useState();
  const [labels, setLabels] = React.useState();

  React.useEffect(function () {
    addAllRed();
    addAllGreen();
    addAllBlue();
  }, [red, blue, green]);

  function jfnine() {
    setStyleDisplayRed("");
    setStyleDisplayGreen("");
    setStyleDisplayBlue("");
    setInstructions("CALCULATING...");
  }
  function addRed(event) {
    jfnine();
    setMessageRed(event.target.value);
  }

  function addGreen(event) {
    jfnine();
    setMessageGreen(event.target.value);
  }

  function addBlue(event) {
    jfnine();
    setMessageBlue(event.target.value);
  }

  function addItemRed() {
    const numValue = Number(messageRed);
    setRed((prevRed) => {
      return [...prevRed, numValue];
    });
  }
  function addItemGreen() {
    const numValue = Number(messageGreen);
    setGreen((prevGreen) => {
      return [...prevGreen, numValue];
    });
  }
  function addItemBlue() {
    const numValue = Number(messageBlue);
    setBlue((prevBlue) => {
      return [...prevBlue, numValue];
    });
  }

  function addAllRed() {
    let allRedNumbers = red;
    let total = null;
    allRedNumbers.map((item) => {
      total += item;
    });
    return setTrb(total);
  }

  function addAllGreen() {
    let allGreenNumbers = green;
    let total = null;
    allGreenNumbers.map((item) => {
      total += item;
    });

    return setTgb(total);
  }

  function addAllBlue() {
    let allBlueNumbers = blue;
    let total = null;
    allBlueNumbers.map((item) => {
      total += item;
    });
    return setTbb(total);
  }
  function Check() {
    if (red.length >= 12) {
      red.splice(0, 1);
    } else {
      return [...red];
    }

    if (green.length >= 12) {
      green.splice(0, 1);
    } else {
      return [...green];
    }

    if (blue.length >= 12) {
      blue.splice(0, 1);
    } else {
      return [...blue];
    }
  }

  function go() {
    if (red.length >= 10) {
      return (statistics)
    }else {
      return ("Enter the required numbers to predict among...");
    }
  }

 

   

  function displayRed() {
    setStyleDisplayRed(<div className="displayRed">2+</div>);
  }
  function displayGreen() {
    setStyleDisplayGreen(<div className="displayGreen">2+</div>);
  }
  function displayBlue() {
    setStyleDisplayBlue(<div className="displayBlue">2+</div>);
  }

  // to calculate the capital

  //first receiving and storing the capital entered
  function cC(event) {
    setCal(event.target.value);
  }

  //calculating first stake
  function calculateCapital() {
    const label = Math.round(cal / 3);
    setFirstStake(Math.floor(label * 0.0167));
    setSecondStake(Math.floor(label * 0.0667));
    setThirdStake(Math.floor(label * 0.2167));
    setFourthStake(Math.floor(label * 0.6667));
    setLabels(label);
  }

  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  function statistics() {
    if (trb < tgb && trb < tbb){
     return (<h4>Bet on the red among...</h4>)
    }else if (tgb < trb && tgb < tbb) {
      return (<h4>Bet on the green among...</h4>)
    }else if (tbb < trb && tbb < tgb) {
      return (<h4>Bet on the blue among...</h4>)
   }else {
      return ('go')
    }
    }

  console.log(red, green, blue);
  console.log(trb, tgb, tbb);

  return (
    <div className="App">
      <div className="header">
        <div className="logout" onClick={logout}>
          logout?
        </div>{" "}
        <div className="ifrme">
          {" "}
          <h1>
            Win Consistently On{" "}
            <span className="ja">
              49<span className="j">ja</span>{" "}
            </span>
            !!!{" "}
          </h1>
          <marquee behavior="scroll" direction="left" className="my-number">
            <h2>Contact On Whatsapp +2348101530401</h2>
          </marquee>
        </div>
        <div className="inputs">
          <div className="inputBox">
            <input
              type="text"
              required="required"
              className="input red"
              onChange={addRed}
            />{" "}
            <span>Red</span>{" "}
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              className="input green"
              onChange={addGreen}
            />{" "}
            <span>Green</span>{" "}
          </div>
          <div className="inputBox">
            {" "}
            <input
              type="text"
              required="required"
              className="input blue"
              onChange={addBlue}
            />{" "}
            <span>Blue</span>{" "}
          </div>
        </div>
        <button
          className="button button-app"
          onClick={() => {
            addItemRed();
            addItemGreen();
            addItemBlue();
            go();
             Check();
            setInstructions(go());
            setStyleDisplayGreen(<div className="displayGreen">2+</div>);
            setStyleDisplayRed(<div className="displayRed">2+</div>);
            setStyleDisplayBlue(<div className="displayBlue">2+</div>);
         
         
           
          }}
        >
          ADD ITEM
        </button>
        <div className="betting">
          {instructions}
          <div className="section">
            {StyleDisplayRed}
            {StyleDisplayGreen}
            {StyleDisplayBlue}
          </div>
        </div>
      </div>

      <div className="main">
        {" "}
        <h1>CAPITAL</h1>
        <div className="inputBox inputBoxs">
          {" "}
          <div>
            {" "}
            <button className="button calculate" onClick={calculateCapital}>
              Calculate
            </button>
          </div>
          <input
            type="text"
            required="required"
            className="input capital"
            onChange={cC}
          />{" "}
          <span>enter your capital</span>{" "}
        </div>
        <div className="percentage">
          <b> Involved:</b> <span className="design"> {labels}</span> <br />{" "}
          <br />
          First : <span className="design">{firstStake}</span> <br />
          Second : <span className="design"> {secondStake}</span> <br />
          Third : <span className="design"> {thirdStake}</span> <br />
          Fourth : <span className="design"> {fourthStake}</span> <br />
        </div>
      </div>

      <div className="footer">&copy; All Rights Reserved</div>
    </div>
  );
}

export default Home;
