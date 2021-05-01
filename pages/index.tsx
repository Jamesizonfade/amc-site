import { Layout } from "../component/Layout";
import { Partners } from "../component/Partners";
import { Slider } from "../component/Slider";
import infrastructure from "../data/infrastructure.json";
import { CityPlan } from "../component/CityPlan";

const Home = () => {
  return (
    <>
      <Layout title="Home">
        {/* Home Slider */}
        <Slider />

        {/*About Awka Millennium City */}
        <div className="section-block grey-bg background-shape-3 mb-5">
          <div className="container">
            <div className="row">
              {/* Statement */}
              <div className="col-md-8 col-12">
                <div className="section-heading">
                  <small className="uppercase text-primary">Who we are</small>
                  <h4 className="semi-bold">About Awka Millennium City</h4>
                </div>
                <div className="text-content mt-15 text-justify">
                  <p style={{ lineHeight: "2.5" }}>
                    AMC is a Premium multi-nucleic real estate development that
                    is slated to redefine the concept of urban living within
                    Awka, Anambra state. The developer (M-P Infrastructure Ltd)
                    envisions a new residential layout whose development will
                    boost economic activity while increasing the quality of
                    housing in the state capital territory. The commercial
                    avenue, cascaded to include developments such as worship
                    centres, recreational establishments, offices, malls,
                    restaurants etc. enables AMC facilitate the concept of Live,
                    work & play as a one stop destination. AMC will be
                    underpinned by quality municipal infrastructure, seamlessly
                    integrated via the adoption of technology, that will
                    guarantee seamless provision of requisite amenities needed
                    to sustain a good quality lifestyle. Owing to its adoption
                    of technology in various components of the development, AMC
                    is poised to become the first smart city in the South East
                    upon completion.
                  </p>
                </div>
              </div>

              {/*  image */}
              <div className="col-md-4 col-12">
                <img
                  src="img/side-img.png"
                  className="position-relative extra-rounded-border shadow-primary z-index-9 mt-30-xs"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* The City Plan */}
        <CityPlan />

        {/* The Infrastructure */}
        <div className="section-block grey-bg background-shape-3">
          <div className="container">
            <div className="section-heading text-center">
              <h3 className="semi-bold font-size-33">The Infrastructure</h3>
              <div className="section-heading-line line-thin"></div>
              <p>
                AMC is rich with a lot of Infrastructures which will give you
                all the comfort you need.
              </p>
            </div>
            <div className="row">
              {/* Infrastructures */}
              {infrastructure.map((rec, idx) => (
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <div
                    className="testmonial-item-5 test-card text-center"
                    style={{ minHeight: "430px" }}
                  >
                    <img src={rec?.image} alt="" />
                    <h3 className="mt-2 mb-3">{rec?.title}</h3>
                    <p>{rec?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The City Progress Report : News, Update and Gallery */}
        <div
          className="section-block bg-dot-right grey-bg jarallax"
          data-jarallax
          data-speed="0.9"
        >
          <div className="container">
            <div className="row">
              {/* Video Section */}
              <div className="col-md-6 col-sm-12 col-12">
                <div className="video-video-box full-width">
                  <img
                    src="img/video-img.png"
                    alt="img"
                    className="shadow-primary"
                    style={{ borderRadius: "10px" }}
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
                  data-iziModal-width="800px"
                  data-iziModal-fullscreen="true"
                >
                  <iframe
                    height="415"
                    src="https://www.youtube.com/watch?v=osnUQfGzqzU"
                    className="full-width shadow-primary"
                  ></iframe>
                </div>
              </div>

              {/* Text Section */}
              <div className="col-md-6 col-sm-12 col-12">
                <div className="pl-45-md">
                  <div className="section-heading">
                    <h3 className="semi-bold">City Progress Report</h3>
                    <p>
                      The entire development sits on approximately 100 hectares
                      of Land.
                    </p>
                  </div>
                  <div>
                    <div className="contact-icon-box">
                      <i className="icon-phone-book"></i>
                      <h4>AMC News</h4>
                      <h5>
                        Get the latest News on AMC project construction,
                        Contribution and Visitations.
                      </h5>
                    </div>
                    <div className="contact-icon-box">
                      <i className="icon-opened-email-outlined-interface-symbol"></i>
                      <h4>AMC Site Update</h4>
                      <h5>
                        The City is development is amazing. AMC will bring a new
                        look to the State.
                      </h5>
                    </div>
                    <div className="contact-icon-box">
                      <i className="icon-location"></i>
                      <h4>AMC Gallery</h4>
                      <h5>
                        View great gallery of Site Progress and be amazed at how
                        quickly the City is coming to life.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awka millennium City */}
        <div
          className="section-block-parallax jarallax black-overlay-70"
          data-jarallax
          data-speed="0.6"
        >
          <div className="container">
            <div className="large-heading text-center">
              <h4 className="semi-bold white-color">Awka Millennium City</h4>
              <p style={{ color: "lightgrey", fontSize: "24px" }}>
                We are bringing a new look to the City of Awka
              </p>
              <div className="section-heading-line"></div>
            </div>
          </div>
        </div>

        {/* Our Partners */}
        <Partners />
      </Layout>
    </>
  );
};
export default Home;
