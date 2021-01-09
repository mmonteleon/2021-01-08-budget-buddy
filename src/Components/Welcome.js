import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      paySchedule: "Biweekly",
      payValue: 0,
    }
  }

  changePay = (pay) => {
    this.setState(state => {
      state.paySchedule = pay
      return state
    })
  }

  changeAmount = (e) => {
    let amount = e.target.value
    console.log(amount)
    this.setState({
      payValue: amount
    })
  }
 
  render() {
    let paySchedules = ["Monthly", "Biweekly", "Weekly"]
    return (
      <div className="Welcome">
        <h4>Welcome!</h4>
        <p className="intro">We're going to ask a few questions to get started</p> 
        <div className="row">
          <p className="question">How often are you paid?</p>
          {paySchedules.map(payType => <span key={payType} className={"selectButton" + (this.state.paySchedule === payType ? " active" : "")} onClick={() => this.changePay(payType)}>{payType}</span> )} 
        </div>
        <div className="row">
          <p className="question">How much do you take home each period?</p> 
          <input type="number" onChange={this.changeAmount}/>
        </div>
        <div className="row">
          <span className="selectButton" onClick={() => this.props.confirmBudget(this.state.paySchedule, this.state.payValue)}>Confirm</span> 
        </div>
      </div>
    );
  }
}

export default Welcome;
