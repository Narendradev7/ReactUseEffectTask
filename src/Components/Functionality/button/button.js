const ButtonComponent =(props)=> {
    const {children,onClick}=props
    return(
      <>  
       <button onClick={onClick} style={{backgroundColor:"black",color:"white"}}  >{children}</button>
      </>
    )
  }
  export default ButtonComponent