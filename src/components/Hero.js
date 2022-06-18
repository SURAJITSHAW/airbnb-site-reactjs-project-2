import groupLogo from "../assets/groupCollage.png"

const Hero = () => {
    return ( 
        <div className="container d-flex flex-column jutify-content-center g-2 my-3">
            <img src={groupLogo} alt="" className="img-fluid mb-4" />
            <h1 className="display-2 fw-bold">Online Experiences</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro fugit dolor, quam totam, voluptas est odit repellendus nam odio itaque distinctio laudantium dicta.</p>
        </div>
     );
}
 
export default Hero;