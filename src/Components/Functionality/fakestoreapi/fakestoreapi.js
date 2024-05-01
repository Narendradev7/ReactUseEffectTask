const FakeStore =(props)=>{

    const {title,prices,image,category}=props
    return(
        <div className="card" style={{ width: 550,height:350,backgroundColor:"lightgrey",display: "grid", gridtemplatecolumns: "100px 100px"}}>

            <div className="card-body">
            <h3 className="card-title">Title:     {title}</h3><br></br>
                <img src={image} alt="profesional" style={{width:80, marginLeft:130}}/><br></br><br></br>
                <h4 className="card-text">Price:   {prices}</h4>
                <h5 className="card-text">Category: {category}</h5>
                
            </div>
        </div>

    )
}

export default FakeStore


// const {bgColor,color,buttonText,buttonProperties: {height,width}} = props

//     return (

//         <>
//         <button style={{
//             backgroundColor:bgColor,
//             width:width,
//             height:height,
//             color:color
//         }}>{buttonText}</button>
//         </>
//     )