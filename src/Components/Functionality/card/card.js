import ImageComponent from "../image/image"
// import CircleSpinner from "../spinners/spinners"

const Card =(props)=>{
  console.log(props)
  const{title,description,image}=props.product


    return(
        <div className="card" style={{ width: 300 }}>
<ImageComponent  src={image}  />
  <div className="card-body">
    <h4 className="card-title">{title}</h4>
    <p className="card-text">{description}</p>
    {/* <a href="#" className="btn btn-primary">
      See Profile
    </a> */}
  </div>
</div>

    )
}

export default Card