import axios from "axios";
import Card from "../../../Functionality/card/card"
import ImageComponent from "../../../Functionality/image/image";
// import CircleSpinner from "../../../Functionality/spinners/spinners"

const { Component } = require("react");

class Mounting extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      message: "React App",
      products: [],
      color:"red"
    };
  }
  componentDidMount() {
    console.log("componentDidMount",document);
    document.title=this.state.message
    //side effects
    this.fetchData();
  }
  fetchData = async () => {
    try{
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response.status === 200) {
      this.setState({
        products: response.data,
      });
    } else {
      alert("something went wrong");
    }
}catch(err){
    console.log(err)
}
  };

  static getDerivedStateFromProps(props) {
    console.log(props)
    // it changes the state based on the props over the time

    console.log("getDerivedStateFromProps",props);
    return {
        color:props.color
    };
  }
  render() {
    console.log("render");
    return (
      <>
        <h1 style={{color:this.state.color}} >Mounting phase</h1>

        <div
          style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}
        >
          {this.state.products.length > 0 ? (
            this.state.products.map((eachProduct) => {
              const { title } = eachProduct;
              return (
                <>
                  <Card product={eachProduct} />
                </>
              );
            })
          ) : (
            <ImageComponent/>
          )}
        </div>
      </>
    );
  }
}

export default Mounting;