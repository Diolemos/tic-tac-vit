import { useState } from "react";
import Cell from "./Components/Cell";

const App = () => {
  const [cells, setCells] = useState(["","","","","","","","","",]);
 const [go,setGo] = useState("circle")
 const [winningMessage, setWinningMessage] = useState(null) 
 console.log(cells)
  return (
    <div className="app">
      <div className="gameboard">
      { cells.map((cell,index)=> <Cell key={index}
       id={index} 
       cell={cell} setCells={setCells}/>)}
        <p></p>
      </div>
    </div>
  );
};

export default App;
