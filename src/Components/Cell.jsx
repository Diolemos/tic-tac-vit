const Cell = ({id,cell, setCells, go})=>{

const handleClick = (e)=>{
 const taken = e.target.firstChild.classList.contains("circle") ||
 e.target.firstChild.classList.contains("cross")

if(!taken){

}
}



    return(
        <div className="square" 
        id={id} 
        onClick={handleClick}>
           
        </div>
    )
}

export default Cell