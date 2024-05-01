


const CousralTask=()=>{

    return(
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
  
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#demo"
      data-bs-slide-to={0}
      className="active"
    />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSViktZZuRN40URzX23Ar81zftBAko70wMvP7XVcM7S-Q&s" alt="Los Angeles" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww" alt="Chicago" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdbVPGwgW1GIQL898CPB4jAuB5x62VzxZ96SPQytsuPV5iMc62yduNuW22i9whUaG5ws&usqp=CAU" alt="New York" className="d-block w-100" />
    </div>
  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#demo"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" />
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#demo"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" />
  </button>
</div>
    )

}

export default CousralTask;