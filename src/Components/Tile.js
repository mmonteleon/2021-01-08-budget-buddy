import React from 'react';

function Tile(props) {
  let expense = props
  return (
    <div className="Tile">
      <h3>{props.title}</h3>
      <p>{props.prompt}</p>
      <p>${props.cost}</p>
      <div className="row">
        <span className="selectButton" onClick={() => props.chooseExpense(expense)}>Select</span> 
      </div>
    </div>
  );
}

export default Tile;
