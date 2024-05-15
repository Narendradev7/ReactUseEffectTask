import {useState} from "react"
import ButtonComponent from "../button/button"

const Counter  = () =>{
    const initialValue=1

    const[count,setCount]=useState(initialValue)
    const [isSubscribe,setIsSubscribe]=useState(false)

    const stateHandler = (action) =>{
     
        switch(action){
            case "INCREMENT":
                setCount(count+1)
                break
            case "DECREMENT":
                setCount(count-1)
                break
            case "RESET":
                setCount(0)
                break
            default :
                break

        }

    }
    const subsribeHandler=()=>{
        setIsSubscribe(!isSubscribe)
    }

    return(
        <>
        <h3>Counter example in functional based components</h3>
        <h3>{count}</h3>
        
        {
            isSubscribe && <> <ButtonComponent  onClick={()=>stateHandler("INCREMENT")} >Increment</ButtonComponent>
            <ButtonComponent onClick={()=>stateHandler("DECREMENT")}  >Decrement</ButtonComponent>
            <ButtonComponent  onClick={()=>stateHandler("RESET")} >Reset</ButtonComponent>
            </>
        }

        <ButtonComponent onClick={subsribeHandler} >{isSubscribe?"unSubscribe":"subscribe"}</ButtonComponent>
       
        </>
    )
}

export default Counter