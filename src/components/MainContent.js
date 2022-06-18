import Card from "./Card";
import { dataArray } from "../data";

const MainContent = () => {
  const cards = dataArray.map((data) => {
    return (
      <div className="col-lg-3">
        <Card
          name={data.name}
          title={data.title}
          location={data.location}
          price={data.price}
          coverImg={data.coverImg}
          stats={data.stats}
          openSpots={data.openSpots}
        />
      </div>
    );
  });

  return (
    <div className="container px-2">
      <div className="row g-2 justify-content-between">
        {cards}
        {/* <Card
            name="Surajit Shaw"
            title= "Web Development best practices with Surajit Shaw"
            location="Kolkata"
            price={200}
            coverImg="husky.jpg"
            stats= {
              {
                rating: "5.0",
                reviewCount: 45
              }
            }
            openSpots= {12}
          /> */}
      </div>
    </div>
  );
};

export default MainContent;
