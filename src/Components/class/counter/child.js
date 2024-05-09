import { PureComponent } from "react"



class Child extends PureComponent{

    render(){
            console.log("Child rerender")
            return(
                <h1>Child Component of Counter</h1>
            )

    }

}


export default Child