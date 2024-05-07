import React, { Component } from "react";







class TodoComponent extends Component{
    // state={
    //     todos:["apple","banana"]
    // }
    constructor(){
        super()

        this.state={
            todos:["apple","banana"]

        }


    }

    addTodoMethod=()=>{

        const newState=[...this.state.todos,"water melon"]

        this.setState({
            todos:newState
        })


    }

    clearAllTodos=()=>{
        const newState=[]
        this.setState({
            todos:newState
        })
    }

    deleteSelectedTodo=(index)=>{

        const filteredArray = this.state.todos.filter((item,i)=>i!==index)
        this.setState({
            todos:filteredArray
        })


    }

    updateSelectedTodo=(index)=>{
        //Logic , Update the selected item in the array , we have index
        let updatedArray=this.state.todos.map((eachFruit,i)=>{
            if(i===index){
                return "kiwi"
            }else{
                return eachFruit
            }

        })

        this.setState({
            todos:updatedArray
        })


    }

    componentDidMount(){

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))

    }

   

    render(){
        return(
            <>
            <h2>TODO COMPONENT</h2>
            <button onClick={this.addTodoMethod} >add todo</button>
            <button onClick={this.clearAllTodos} >Clear all todo</button>
            {
                this.state.todos.map((eachTodo,index)=>{
                    return(
                        <React.Fragment  key={index}   >

                        <h3>{index+1} {eachTodo}</h3>
                        <button onClick={()=>this.deleteSelectedTodo(index)}  >Delete the todo</button>
                        <button onClick={()=>this.updateSelectedTodo(index)}  >Update the todo</button>
             
                        </React.Fragment>
                    )
                })
            }

            
            </>
        )
    }
}

export default TodoComponent
