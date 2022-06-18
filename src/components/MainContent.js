import Card from "./Card";

const MainContent = () => {
  return (
    <div className="container px-2">
      <div className="row g-2 justify-content-between">
        <div className="col-lg-3">
          <Card
            name="Surajit Shaw"
            title= "Web Development best practices with Surajit Shaw"
            location="Kolkata"
            price={200}
            coverImg="husky.png"
            stats= {
              {
                rating: "5.0",
                reviewCount: 45
              }
            }
            openSpots= {12}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
