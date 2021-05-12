import fourBedroomT from "../data/4BedroomBuildingT.json";

export const FourBedroomTerrace = () => {
  return (
    <div className="section-block grey-bg background-shape-3 border-bottom">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <h3 className="semi-bold">Four Bedroom Terrace Houses</h3>
          <div className="section-heading-line"></div>
        </div>
        <div
          className="owl-carousel owl-theme customizable-carousel mt-50 pt-5 px-5 shadow-primary"
          data-loop="true"
          data-items="2"
          data-md-items="2"
          data-sm-items="1"
          data-xs-items="1"
          data-space="25"
          data-autoplay="true"
          data-autospeed="4000"
          data-nav-dots="true"
          data-nav-arrows="true"
        >
          {fourBedroomT.map((rec, idx) => (
            <div
              key={idx}
              className="pricing-section"
              style={{
                backgroundColor: "#fff9e8",
                minHeight: "250px",
                padding: "20px",
                margin: "10px",
              }}
            >
              <img src={rec} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
