import planSlider from "../data/planSlider.json";

export const CityPlan = () => {
  return (
    <div
      className="section-block section-sm border-bottom partners"
      style={{ backgroundColor: "#000000db" }}
    >
      <div className="container">
        <div className="section-heading text-center mb-5  city-plan">
          <h3 className="semi-bold text-white">The Vision</h3>
          <div className="section-heading-line"></div>
          <p>
            The project will be a large-scale residential neighborhood with
            residential, commercial and recreational uses and amenities, such as
            parks and playgrounds.
          </p>
          <p>
            The entire development sits on approximately 100 hectares of Land.
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="video-video-box full-width p-3 shadow-primary"
              style={{ backgroundColor: "grey" }}
            >
              <img
                src="img/banner-mobile.png"
                alt="img"
                className="shadow-primary"
              />
              <div className="video-video-box-overlay">
                <div className="video-video-box-button-sm">
                  <button
                    className="video-video-play-icon pulsebox-1"
                    data-izimodal-open=".izimodal"
                  >
                    <i className="fa fa-play"></i>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="izimodal"
              data-izimodal-width="800px"
              data-izimodal-fullscreen="true"
            >
              <iframe
                height="425"
                src="https://www.youtube.com/embed/8Q9hqtnREjc"
                title="AMC Site Video"
                frameBorder="0"
                className="full-width shadow-primary"
                allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
