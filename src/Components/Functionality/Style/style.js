import "./headings.css";
import styles from "./heading.module.css"


const StyleWorking =()=>{

    const headingStyle={

            color:"blue",
            background:"red",
            height:"50px",
            width:"100px"

    }

    const stylings=false;

    return(
    <> 
        
        <h1 style={
        {
            color:"red",
            background:"blue",
            height:"50px",
            width:"100px"

        }
    }>HI</h1>
   
    
    <h2 style={
            
            headingStyle
        }
    >Hello</h2>


    <h1 className="headindSyling1"
    >Tesing</h1>


    <h1 className={
        stylings?
        "headindSyling1":
        "headinds2"
    }
    >terinory</h1>


<h1 className={styles.mystylemodule}
    >modulesstylesusage</h1>

    </>

    
  
)
    
}

export default StyleWorking;