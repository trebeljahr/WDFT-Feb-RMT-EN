import dice1 from "../images/dice1.png";
import dice2 from "../images/dice2.png";
import dice3 from "../images/dice3.png";
import dice4 from "../images/dice4.png";
import dice5 from "../images/dice5.png";
import dice6 from "../images/dice6.png";

const diceResults = [dice1, dice2, dice3, dice4, dice5, dice6];
export const Dice = ({ number }) => {
  return (
    <img
      className="dice"
      src={diceResults[number - 1]}
      alt={`dice roll of ${number}`}
    ></img>
  );
};
