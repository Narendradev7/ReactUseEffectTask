import { Component } from "react";



class Form extends Component{
    render(){
        return(

            <form>
                <label for="fname">First name:
                <input type="text" id="fname" name="fname"/><br/></label>
                <label for="username">User Name:
                <input type="text" id="username" name="username"/><br/></label>
                <label for="Password">Password:
                <input type="password" id="Password" name="Password"/><br/></label>
                <label for="vehicle1"> I have a password
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> </label><br></br>
                <label for="vehicle2"> I dont have a password
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></label>

            </form>
        )
    }
}


export default Form;