import "./CatGame.css";
import happy from "../../assets/cat_game/happy.png";
import love from "../../assets/cat_game/love.png";
import nervous from "../../assets/cat_game/nervous.png";
import neutral from "../../assets/cat_game/neutral.png";
import sad from "../../assets/cat_game/sad.png";
import peace from "../../assets/cat_game/peace.png";
import mad from "../../assets/cat_game/mad.png";

import canYellow from "../../assets/cat_game/food1.png";
import canBlue from "../../assets/cat_game/food2.png";
import canRed from "../../assets/cat_game/food3.png";

import { useEffect, useState } from "react";
function CatGame({ onLoad }) {
  let [currentTime, setCurrentTime] = useState(10000);
  let [timesFed, setTimesFed] = useState(0);
  let [lives, setLives] = useState(9);
  let [image, setImage] = useState(peace);
  let [color, setColor] = useState("#7E8BBB");
  let [wantedFood, setWantedFood] = useState();
  let [hatedFood, setHatedFood] = useState();
  let [numStyle, setNumStyle] = useState(12);
  let [numStyle2, setNumStyle2] = useState(12);

  function randomizeFood() {
    let array = ["btn-yellow", "btn-blue", "btn-red"];
    const shuffled = array.toSorted(() => 0.5 - Math.random());

    setWantedFood(shuffled[0]);
    setHatedFood(shuffled[2]);
  }

  function onClick(e) {
    if (!e.target.disabled) {
      e.target.disabled = true;
      if (e.target.id === wantedFood) {
        console.log("i want this one!");
        setTimesFed(timesFed + 1);
        setCurrentTime(Math.min(currentTime + 3000, 10000));
        numberChange();
        randomizeFood();
      } else if (e.target.id === hatedFood) {
        setLives(lives - 1);
        numberChange2();
        console.log("ewwww");
      } else {
        console.log("okay");
        setCurrentTime(Math.min(currentTime + 1000, 10000));
      }

      setTimeout(() => {
        e.target.disabled = false;
      }, 3000);
    }
  }

  function numberChange() {
    setNumStyle(18);
    setTimeout(() => {
      setNumStyle(12);
    }, 300);
  }

  function numberChange2() {
    setNumStyle2(18);
    setTimeout(() => {
      setNumStyle2(12);
    }, 300);
  }

  useEffect(() => {
    setWantedFood("btn-yellow");
    setHatedFood("btn-red");
    setTimeout(() => {
      setCurrentTime(currentTime - 10);
    }, 10);
  }, []);

  useEffect(() => {
    if (currentTime > 0) {
      setTimeout(() => {
        setCurrentTime(currentTime - 10);
      }, 10);
    }

    switchImgColor();
    loseLife();
  }, [currentTime]);

  function loseLife() {
    if (currentTime === 0) {
      if (lives > 1) {
        setLives(lives - 1);
        numberChange2();
        setCurrentTime(10000);
      } else {
      }
    }
  }

  function switchImgColor() {
    switch (true) {
      case currentTime > 6000:
        setImage(peace);
        setColor("#7E8BBB");
        break;
      case currentTime <= 6000 && currentTime > 3000:
        setImage(neutral);
        setColor("#E3C066");
        break;
      case currentTime <= 3000 && currentTime > 0:
        setImage(nervous);
        setColor("#D18A8E");
        break;
      default:
        break;
    }
  }

  return (
    <main className="cat-game">
      <section className="page-section">
        <header>
          <h1>/cat_game</h1>
        </header>
        <div className="game-window" onLoad={onLoad}>
          <div className="game-container">
            <div className="game-score">
              <span className="score-item">
                Score:
                <p
                  style={{
                    fontSize: `${numStyle}pt`,
                    transition: `all 0.1s ease`,
                  }}
                >
                  {timesFed}
                </p>
              </span>
              <span className="score-item">
                Lives:
                <p
                  style={{
                    fontSize: `${numStyle2}pt`,
                    transition: `all 0.1s ease`,
                  }}
                >
                  {lives}
                </p>
              </span>
            </div>

            <p>Choose Food</p>
            <div className="game-buttons">
              <button
                onClick={(e) => {
                  onClick(e);
                }}
                className="game-button"
                id="btn-yellow"
              >
                <img src={canYellow} alt="yellow food can" />
              </button>
              <button
                onClick={(e) => {
                  onClick(e);
                }}
                className="game-button"
                id="btn-blue"
              >
                <img src={canBlue} alt="blue food can" />
              </button>
              <button
                onClick={(e) => {
                  onClick(e);
                }}
                className="game-button"
                id="btn-red"
              >
                <img src={canRed} alt="red food can" />
              </button>
            </div>
            <img className="game-character" src={image} alt="cute cat icon" />
            <div className="timer">
              <hr className="timer-base" />
              <hr
                className="timer-progress"
                style={{
                  width: `${currentTime / 20}px`,
                  backgroundColor: `${color}`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <span className="home-divider-container">
        <hr className="home-divider-small" />
      </span>

      <div className="instructions">
        <h1>/instructions</h1>
        <p>
          Feed your cat! Your cat is always hungry, but they can also be
          extremely picky about what they want to eat. Feed your cat the food
          they want, and avoid food they don't want. The fun part? Your cat
          can't talk, so you simply have to guess which food they want! Fun!
        </p>
        <p>
          The timer at the bottom will constantly go down. When it runs out,
          your cat will lose one of their 9 lives! Oh no! The timer will then
          fill back up and repeat until you run out of lives.
        </p>
        <p>
          Feeding them their favourite food will grant you one score and put 3
          more seconds on the timer! Feeding them their hated food will cause
          them to lose one of their lives. Feeding the other food (neither
          favourite or hated) will grant you an extra second on the timer, but
          won't score you a point. Clicking on foods will put that food on
          'cooldown' for 3 seconds, making you unable to click on them.
        </p>
        <p>
          Everytime you successfully feed them their favourite food, their
          favourite and hated foods will be randomized to a (potentially) new
          food.
        </p>
      </div>
    </main>
  );
}

export default CatGame;
