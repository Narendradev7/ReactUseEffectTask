// import "../../../../src/App.css"


const ButtonComponent = (props) =>{
    console.log(props,"props")

    const {bgColor,color,buttonText,buttonProperties: {height,width}} = props

    return (

        <>
        <button style={{
            backgroundColor:bgColor,
            width:width,
            height:height,
            color:color
        }}>{buttonText}</button>
        </>
    )
}

export default ButtonComponent