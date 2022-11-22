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

  React.useEffect(
    function () {
      addAllRed();
      addAllGreen();
      addAllBlue();
    },
    [red, green, blue]
  );
  
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
      return [prevRed.length] > 10 ? [prevRed.shift(), numValue] : [...prevRed, numValue];
    });
  }
  function addItemGreen() {
    const numValue = Number(messageGreen);
    setGreen((prevGreen) => {
      return [prevGreen.length] > 10
        ? [prevGreen.shift()]
        : [...prevGreen, numValue];
    });
  }
  function addItemBlue() {
    const numValue = Number(messageBlue);
    setBlue((prevBlue) => {
      return [prevBlue.length] > 10
        ? [prevBlue.shift()]
        : [...prevBlue, numValue];
        console.log([prevBlue.shift(),numValue])
    });
  }

  function addAllRed() {
    let allRedNumbers = red;
    let total = null;
    allRedNumbers.forEach((item) => {
      total += item;
    });
    return setTrb(total);
  }

  function addAllGreen() {
    let allGreenNumbers = green;
    let total = null;
    allGreenNumbers.forEach((item) => {
      total += item;
    });

    return setTgb(total);
  }

  function addAllBlue() {
    let allBlueNumbers = blue;
    let total = null;
    allBlueNumbers.forEach((item) => {
      total += item;
    });
    return setTbb(total);
  }

  function go() {
    if (red.length >= 9) {
      if (trb < tgb && trb < tbb) {
        return (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Bet on the red among...")
                .callFunction(() => {
                  displayRed();
                })
                .start();
            }}
          />
        );
      } else if (tgb < trb && tgb < tbb) {
        return (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Bet on the green among...")
                .callFunction(() => {
                  displayGreen();
                })
                .start();
            }}
          />
        );
      } else if (tbb < trb && tbb < tgb) {
        return (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Bet on the blue among...")
                .callFunction(() => {
                  displayBlue();
                })
                .start();
            }}
          />
        );
      } else {
        return "Enter the required numbers to predict among...";
      }
    } else {
      return "Enter the required numbers to predict among...";
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

  console.log(red, green, blue);

  console.log(tbb, trb, tgb);

  return (
    <div className="App">
      <div className="header">
        <div className="logout" onClick={logout}>
          logout?
        </div>
          {" "}
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
            setStyleDisplayGreen(<div className="displayGreen">2+</div>);
            setStyleDisplayRed(<div className="displayRed">2+</div>);
            setStyleDisplayBlue(<div className="displayBlue">2+</div>);
            setInstructions(go());
            addItemRed();
            addItemGreen();
            addItemBlue();
            go();
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
