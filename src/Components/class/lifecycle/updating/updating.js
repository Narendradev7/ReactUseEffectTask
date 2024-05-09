import axios from "axios";
import { Component } from "react";
import ImageComponent from "../../../functional/image/image";



class UpdatingPhase extends Component{
    state={
        count:1,
        color:"green",
        product:null
    }
    incrementAction=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    static getDerivedStateFromProps(props) {
        console.log(props)
        // it changes the state based on the props over the time
    
        console.log("getDerivedStateFromProps",props);
        return {
            color:props.color
        };
      }
      componentDidMount(){
        document.title=`Count ${this.state.count}`
        axios.get(`https://fakestoreapi.com/products/${this.state.count}`)
        .then(response=>{
            if(response.status===200){
                this.setState({
                    product:response.data
                })
            }
        })


      }
    // componentDidUpdate(){
    //     console.log("componentDidUpdate")
    //     document.title=`Count ${this.state.count}`

    //     axios.get(`https://fakestoreapi.com/products/${this.state.count}`)
    //     .then(response=>{
    //         if(response.status===200){
    //             this.setState({
    //                 product:response.data
    //             })
    //         }
    //     })

    // }

    shouldComponentUpdate(){
        return true
    }

   getSnapshotBeforeUpdate=(props,state)=>{

    console.log(state,"getSnapshotBeforeUpdate",props)
    return null

   }
    render(){
        console.log("render")
        return(
            <>
            <h1 style={{color:this.state.color}} >Updating phase</h1>
            <h3>{this.state.count}</h3>
            <button  onClick={this.incrementAction} >Click to increment</button>
            {
                this.state.product ?
                <>

                <h2>{this.state.product.title}</h2>
                <ImageComponent  src={this.state.product.image} />
                </>
                :
                null
            }
            </>
        )
    }
}

export default UpdatingPhase