import { Component } from "react";


class TodoComponent extends Component{
    state={
        todos:["apple","banana"]
    }

    addTodoMethod=()=>{

        const newState = [...this.state.todos,"WaterMelon"]

        this.setState( {
            todos:newState
        })
           
    }

    clearTodoMethod=()=>{

        const newState = []
        this.setState({
            todos:newState 
        })

    }

    deleteSelectMethod=(index)=>{

        const filteredArray=this.state.todos.filter((item,i)=>i!==index)
        this.setState({
            todos:filteredArray
        })

    }

    updateSelectMethod=(index)=>{

        const updatedArray = this.state.todos.map((eachfruit,i)=>{
            if(i===index){
                return "kiwi"
            }else{
                return eachfruit
            }
        
        })
        this.setState({
            todos:updatedArray 
        })

    }
    


    render(){
        return(
            <>
            <h2>To Do List</h2>
            <button onClick={this.addTodoMethod}>Add to List</button> <button onClick={this.clearTodoMethod}>Clear the List</button>
            {
                this.state.todos.map((eachtodo,index)=>{
                    return(
                        <>
                        <h3>{index+1}. {eachtodo}</h3>  
                        <button onClick={()=>this.deleteSelectMethod(index)}>Delete</button>
                        <button onClick={()=>this.updateSelectMethod(index)}>Update</button>
                        </>
                    )
                })
            }
            </>
        )
    }
}

 export default TodoComponent;