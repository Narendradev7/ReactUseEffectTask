import { Component } from "react";
import ImageComponent from "../../../Functionality/image/image";


class UnMounting extends Component{

    state={
        isChildVisible:true
    }

    handler=()=>{
        this.setState({
            isChildVisible:!this.state.isChildVisible
        })
    }
    render(){
        return(
            <>
            <h1>unmounting</h1>


            {
                this.state.isChildVisible ?
                <Child/>
                :
                <h1>no Child</h1>
            }
            
            <button onClick={this.handler}>Hide Child</button>
            </>
            
        )
            
        
    }
}

export default UnMounting


class Child extends Component{
    render(){
        return(
            <>
                <h1>Child Visible</h1>
                <ImageComponent src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}/>
                
            </>

        )
    }
}