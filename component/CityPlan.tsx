import planSlider from "../data/planSlider.json";

export const CityPlan = () => {
  return (
    <div
      className="section-block section-sm border-bottom partners"
      style={{ backgroundColor: "#000000db" }}
    >
      <div className="container">
        <div className="section-heading text-center mb-5  city-plan">
          <h3 className="semi-bold text-white">The City Plan</h3>
          <div className="section-heading-line"></div>
          <p>
            View a 3D image representation of what the City will look like on
            completion.
          </p>
          <p>
            The project will be a large-scale residential neighborhood with
            residential, commercial and recreational uses and amenities, such as
            parks and playgrounds.
          </p>
          <p>
            The entire development sits on approximately 100 hectares of Land.
          </p>
        </div>

        <div
          className="owl-carousel owl-theme customizable-carousel plan-image"
          data-loop="true"
          data-items="1"
          data-md-items="1"
          data-sm-items="1"
          data-xs-items="1"
          data-space="15"
          data-autoplay="true"
          data-autospeed="4000"
          data-nav-dots="true"
          data-nav-arrows="true"
        >
          {planSlider.map((rec, idx) => (
            <div key={idx} className="item">
              <img
                src={rec}
                alt="img"
                style={{ borderBottom: "1px solid #ffba00" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
