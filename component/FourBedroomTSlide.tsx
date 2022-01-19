import fourBedroomT from "../data/4BedroomBuildingT.json";

export const FourBedroomTerrace = () => {
  return (
    <div className="section-block section-sm border-bottom partners">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <h3 className="semi-bold">3-Bedroom Terraces & Maisonettes.</h3>
          <div className="section-heading-line"></div>
        </div>
        <div
          className="owl-carousel owl-theme customizable-carousel shadow-primary house-container"
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
            <div key={idx} className="pricing-section house-img">
              <img src={rec} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
