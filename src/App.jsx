import { useState } from "react";
import Cell from "./Components/Cell";

const App = () => {
  const [cells, setCells] = useState(["","","","","","","","","",]);
 const [go,setGo] = useState("circle")
 const [winningMessage, setWinningMessage] = useState(null) 
 const message = " " + go + " turn"
  return (
    <div className="app">
      <div className="gameboard">
      { cells.map((cell,index)=> <Cell key={index}
       id={index} 
       go={go}
       setGo={setGo}
       cell={cell} setCells={setCells}/>)}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default App;
