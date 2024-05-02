import { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    message: "My Counter App",
    buttonText: "Subscribe",
    isSubscribe: false,
  };

  changeAction = (action) => {
    switch (action) {
      case "Increment":
        this.setState({
          count: this.state.count + 1,
        });
        break;
      case "Decrement":
        if (this.state.count > 0)
          this.setState({
            count: this.state.count - 1,
          });
        break;
      case "Reset":
        this.setState({
          count: 0,
        });
        break;
      default:
        break;
    }
  };

  subscribeAction = ()=>{
    this.setState({
        buttonText:"Subscribed",
        isSubscribe:!this.state.isSubscribe
    })
  }

  render() {
    return (
      <>

          <button onClick={this.subscribeAction}
          
          style={{
            backgroundColor:this.state.isSubscribe?"red":"green"
          }}
          
          >{
          this.state.isSubscribe ?
            "Subscribed":
            "subscribe"
          
          }</button>

        {
        this.state.isSubscribe && 
          <>
            <h1>{this.state.message}</h1>
            <h1>{this.state.count}</h1>

            <button onClick={() => this.changeAction("Increment")}>
              Increment
            </button>
            <button onClick={() => this.changeAction("Decrement")}>
              Decrement
            </button>
            <button onClick={() => this.changeAction("Reset")}>Reset</button>
          </>
        }
      </>
    );
  }
}

export default Counter;

