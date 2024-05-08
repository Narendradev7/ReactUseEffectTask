import axios, { Axios } from "axios";
import { Component } from "react";
import ImageComponent from "../../../Functionality/image/image";



class UpdatingPhase extends Component{

    state={
        count:0,
        color:"green",
        products:[]
    }

    incrementAction=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    static getDerivedStateFromProps(props) {
        console.log(props)
            
        console.log("getDerivedStateFromProps",props);
        return {
            color:props.color
        };
      }

      componentDidMount(){
            document.title=`Count ${this.state.count}`
            axios.get(`https://fakestoreapi.com/products/${this.state.count}`)
            .then(response=>console.log(response))
      }
      componentDidUpdate(){
            document.title=`Count ${this.state.count}`
            axios.get(`https://fakestoreapi.com/products/${this.state.count}`)
            .then(response=>{
                if(response.status===200){
                    this.setState({
                        products:response.data
                        
                    })
                }
            })
            
      }

      shouldComponentUpdate(){
        return true
      }

    render(){
        return(
            <>
                <h1 style={{color:this.state.color}}>Updating Phase</h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.incrementAction}>Click to increment</button>
                

                {
                    this.state.products ?
                    <>
                    <h2>{this.state.products.title}</h2>
                    <ImageComponent src={this.state.products.image}/>
                    
                    </>
                    :
                    null
                }
            </>
        )
    }

}

export default UpdatingPhase;