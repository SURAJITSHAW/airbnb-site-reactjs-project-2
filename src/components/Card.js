
const Card = (props) => {
    return ( 
        <div className="mx-auto my-3" style={{width: "400px"}}>
      <div className="bg-dark text-white card">
        <img src={`../assets/${props.coverImg}`} className="card-img-top img-fluid" style={{height: "auto"}} alt="..." />
        <div className="card-body ">
          <h3 className="card-title">{props.name}</h3>
          <h6 className="card-subtitle text-secondary my-1"><small><i className="bi bi-star">* </i>{props.stats.rating} ({props.stats.reviewCount}) 🔹 {props.location}</small></h6>
          <h6 className="mt-2 card-subtitle text-warning">{props.title}</h6>
          <a href="https://surajit-first-portfolio.netlify.app" className="btn btn-light mt-4 " style={{width: "100%"}}>Call for Booking (Only {props.openSpots} spots left)</a>
        </div>
        <div className="card-body">
        <p className="lead"><strong>From ${props.price}</strong> / person</p>
        </div>
      </div>
    </div>
     );
}
 
export default Card;