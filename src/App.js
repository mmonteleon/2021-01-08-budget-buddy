import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Tile from './Components/Tile';
import Header from './Components/Header';
import Welcome from './Components/Welcome';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      budgetConfirmed: false,
      schedule: "Monthly",
      monthlyBudget: 0,
      bonusPeriods: 0,
      bonusAmount: 0,
      expenses: {},
    }
  }

  chooseExpense = (expense) => {
    this.setState(state => {
      state.expenses[expense.category] = {
        title: expense.title,
        cost: expense.cost
      }
      return state
    })
  }

  confirmBudget = (schedule, amount) => {
    console.log(amount)
    if (schedule === "Monthly") {
      this.setState({monthlyBudget: amount, budgetConfirmed: true})
    } else if (schedule === "Weekly") {
      this.setState({
        monthlyBudget: amount * 4,
        bonusPeriods: 4,
        bonusAmount: amount,
        schedule: schedule,
        budgetConfirmed: true
      })
    } else if (schedule === "Biweekly") {
      this.setState({
        monthlyBudget: amount * 2,
        bonusPeriods: 2,
        bonusAmount: amount,
        schedule: schedule,
        budgetConfirmed: true
      })
    } else {
      console.log("error - pay schedule not found")
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {
          this.state.budgetConfirmed ? ( 
            <>
              <Dashboard expenses={this.state.expenses} monthlyBudget={this.state.monthlyBudget} /> 
              <div className="TileContainer">
                <Tile chooseExpense={this.chooseExpense} category="House" title="Studio Apartment" prompt="A small studio apartment can be the cheapest option, but you may not have a lot of space." cost={650}/>
                <Tile chooseExpense={this.chooseExpense} category="House" title="Two Bedroom" prompt="A two-bedroom would normally be pretty expensive, but this one assumes you'll find a roommate to share it with" cost={750}/>
                <Tile chooseExpense={this.chooseExpense} category="Transportation" title="30-day Unlimited MetroCard" prompt="Buying monthly saves a tiny bit of money, but it does mean that sometimes you'll use more money than you planned to." cost={127}/>
                <Tile chooseExpense={this.chooseExpense} category="Transportation" title="7-day Unlimited MetroCard (x4)" prompt="A small studio apartment can be the cheapest option, but you may not have a lot of space." cost={132}/>
              </div>
            </>
            ) : (
            <Welcome confirmBudget={this.confirmBudget} />
             
          ) }
        
      </div>
    );
  }
}

export default App;
