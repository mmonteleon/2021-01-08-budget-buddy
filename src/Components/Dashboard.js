import React from 'react';

function Dashboard(props) {
  let amountSpent = 0
  Object.keys(props.expenses).forEach(expense => {
    amountSpent += props.expenses[expense].cost
  })
  let percentSpent = amountSpent / props.monthlyBudget * 100
  let amountLeft = props.monthlyBudget - amountSpent
  let percentLeft = amountLeft / props.monthlyBudget * 100
  return (
    <div className="Dashboard">
      <h4>Your Finances</h4>
      <div className="row">Your Monthly Budget: ${props.monthlyBudget}</div>
      <div className="row">You've Spent: ${amountSpent}</div>
      <div className="row">Remaining: ${amountLeft}</div>
      <br/>
      <div className="row">
        <div style={{height: "10px", backgroundColor: "red", width: percentSpent + "%"}}></div>
        <div style={{height: "10px", backgroundColor: "green", width: percentLeft + "%"}}></div>
      </div>
      <br/>
      {
        Object.keys(props.expenses).map((expense, i) => (
          <div className="row">Your {expense} choice: {props.expenses[expense].title}, ${props.expenses[expense].cost} </div>
        ))
      }
    </div>
  );
}

export default Dashboard;
