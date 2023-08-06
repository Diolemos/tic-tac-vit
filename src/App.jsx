import { useState } from "react";
import Cell from "./Components/Cell";

const App = () => {
  const [cells, setCells] = useState(["","","","","","","","","",]);
 console.log(cells)
  return (
    <div className="app">
      <div className="gameboard">
      { cells.map((cell,index)=> <Cell key={index} id={index} cell={cell}/>)}
        <p></p>
      </div>
    </div>
  );
};

export default App;
