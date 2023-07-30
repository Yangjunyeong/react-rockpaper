import "./App.css";
import Box from "./components/Box";
import { useState } from "react";
// 1. 박스만들기
// 2. 박스 안에 타이틀 이미지 결과값 나오게 하기
// 3. 박스 밑에 가위 바위 보 버튼 만들기
// 4. 버튼을 클릭하면 박스에 내가 선택한 픽이 나옴
// 5. ... 오른쪽 박스에 컴퓨터가 선택한 픽이 나옴
// 6. 승패 결과값에 따라 테두리가 바뀜
function App() {
  const [userPick, setUserPick] = useState(null);
  const [comPick, setComPick] = useState(null);
  const [result, setResult] = useState("");
  const choice = {
    rock: {
      name: "주먹",
      img: "./stone.jpg",
    },
    paper: {
      name: "보",
      img: "./paper.png",
    },
    scissors: {
      name: "가위",
      img: "./scissors.jpg",
    },
  };
  const play = (pick) => {
    setUserPick(choice[pick]);
    let computerPick = randomPick();
    setComPick(choice[computerPick]);
    const winnerResult = judgement(choice[pick], choice[computerPick]);
    setResult(winnerResult);
  };
  const randomPick = () => {
    const choiceArray = Object.keys(choice);
    const randomResult =
      choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return randomResult;
  };

  const judgement = (userChoice, computerChoice) => {
    if (userChoice.name === computerChoice.name) {
      return "tie";
    } else if (userChoice.name === "주먹") {
      return computerChoice.name === "가위" ? "win" : "lose";
    } else if (userChoice.name === "가위") {
      return computerChoice.name === "보" ? "win" : "lose";
    } else if (userChoice.name === "보") {
      return computerChoice.name === "주먹" ? "win" : "lose";
    }
  };

  return (
    <div>
      <div className="container">
        <Box who="You" pick={userPick} result={result} />
        <Box
          who="Com"
          pick={comPick}
          result={
            result === ""
              ? ""
              : result === "tie"
              ? "tie"
              : result === "win"
              ? "lose"
              : "win"
          }
        />
      </div>
      <div className="container">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
