import husky from "../assets/husky.jpg";

const Card = (props) => {
    return ( 
        <div className="mx-auto my-3" style={{width: "450px"}}>
      <div className="bg-dark text-white card">
        <img src={`../assets/${props.coverImg}`} className="card-img-top" alt="..." />
        <div className="card-body ">
          <h3 className="card-title">{props.name}</h3>
          <h6 className="card-subtitle text-secondary my-1"><small>star{props.stats.rating}({props.stats.reviewCount}) 🔹 {props.location}</small></h6>
          <h6 className="mt-2 card-subtitle text-warning">{props.title}</h6>
          <a href="#" className="btn btn-light mt-4 " style={{width: "100%"}}>Call for Booking</a>
        </div>
        <div className="card-body">
        <h3>About</h3>
        <p className="lead"></p>
        </div>
      </div>
    </div>
     );
}
 
export default Card;