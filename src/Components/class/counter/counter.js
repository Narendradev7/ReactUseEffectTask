import { Component } from "react";
import Child from "./child";

class Counter extends Component {
  state = {
    count: 10,
    isSubscribe: false,
    subscribeText: "subscribe",
    subscribedText: "subscribed",
    products:[
        {
            id:1,
            product:"laptop",
            count:1
        },
        {
            id:2,
            product:"laptop2",
            count:1
        },
    ]
  };

  changeAction = (action) => {
    switch (action) {
      case "INCREMENT":
        this.setState({
          count: this.state.count + 1,
        });
        break;
      case "DECREMENT":
        if (this.state.count > 0) {
          this.setState({
            count: this.state.count - 1,
          });
        }
        break;
      case "RESET":
        this.setState({
          count: 0,
        });
        break;
      default:
        break;
    }
  };

  subscribeAction = () => {
    this.setState({
      isSubscribe: !this.state.isSubscribe,
    });
  };

  render() {
    console.log("Parent Rerender")
    const { isSubscribe, subscribeText, subscribedText, count } = this.state;
    return (
      <>
        <button
          onClick={this.subscribeAction}
          style={{
            backgroundColor: isSubscribe ? "green" : "red",
          }}
        >
          {!isSubscribe ? subscribeText : subscribedText}
        </button>

        {isSubscribe && (
          <>
            <h4>{count}</h4>
            <button onClick={() => this.changeAction("INCREMENT")}>
              Increment
            </button>
            <button onClick={() => this.changeAction("DECREMENT")}>
              Decrement
            </button>
            <button onClick={() => this.changeAction("RESET")}>Reset</button>
          </>
        )}
        <Child count={this.state.count}></Child>
      </>
    );
  }
}

export default Counter;