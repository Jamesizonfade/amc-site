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
        <div className="section-block grey-bg background-shape-3">
          <div className="container">
            <div className="row">
              <div className="col-12">
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
              {/* Statement */}
              <div className="col-md-6 col-12">
                {/* Location */}
                <div className="section-heading">
                  <h4 className="semi-bold">Location</h4>
                </div>
                <div className="text-content mt-15 text-justify">
                  <p style={{ lineHeight: "2.5" }}>
                    Awka is the capital city of Anambra State which has west
                    Africa's largest market in Onitsha. The state is ranked 1st
                    in commercial trade volume in Nigeria's South-East region
                    and known as one of the fastest growing economies in
                    business hubs in Nigeria.
                  </p>
                  <p>
                    AMC will be a haven strategically located in Awka City.
                    Conveniently located just steps from the new Government
                    State House. It is positioned about 40km from the beautiful
                    River Niger, making it easily accessible from Asaba
                    International Airport. It's also conveniently accessible via
                    Old Onitsha-Enugu road which is linked to the Onitsha-Enugu
                    Express way.
                  </p>
                  <p>
                    AMC has three major Airports within a 100km radius, Sam
                    Mbakwe International Airport, Owerri, Akanu Ibiam
                    International Airport, Enugu and Asaba International
                    Airport.
                  </p>
                  <p>AMC could not have been better located!</p>
                </div>
              </div>

              {/*  Map */}
              <div className="col-md-6 col-12">
                <div
                  className="shadow-primary p-3"
                  style={{ marginTop: "40px" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374853.8242706969!2d7.174687957322112!3d6.263753531190453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104379e327f4e263%3A0x2a4e473a6a8ae27c!2sAwka%20Millennium%20City!5e0!3m2!1sen!2sng!4v1623850942477!5m2!1sen!2sng"
                    height="400"
                    className="full-width"
                    style={{ border: "0" }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Vision */}
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

        {/* City Progress Report : News, Update and Gallery */}
        <div
          className="section-block bg-dot-right grey-bg jarallax"
          data-jarallax
          data-speed="0.9"
        >
          <div className="container">
            <div className="row">
              {/* Video Section */}
              <div className="col-md-6 col-sm-12 col-12">
                <div className="video-video-box full-width p-3 shadow-primary">
                  <img
                    src="img/video-img.png"
                    alt="img"
                    className="shadow-primary"
                  />
                  <div className="video-video-box-overlay">
                    <div className="video-video-box-button-sm">
                      <button
                        className="video-video-play-icon pulsebox-1"
                        data-izimodal-open="#mod"
                      >
                        <i className="fa fa-play"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  id="mod"
                  className="izimodal"
                  data-iziModal-width="800px"
                  data-iziModal-fullscreen="true"
                >
                  <iframe
                    height="425"
                    src="https://www.youtube.com/embed/iuh5sE-h1FY"
                    title="AMC Site Video"
                    frameBorder="0"
                    className="full-width shadow-primary"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                      <h4>
                        <a href="/news">AMC News</a>
                      </h4>
                      <h5>
                        Get the latest News on AMC project construction,
                        Contribution and Visitations.
                      </h5>
                    </div>
                    <div className="contact-icon-box">
                      <i className="icon-opened-email-outlined-interface-symbol"></i>
                      <h4>
                        <a href="/site-update">AMC Site Update</a>
                      </h4>
                      <h5>
                        The City is development is amazing. AMC will bring a new
                        look to the State.
                      </h5>
                    </div>
                    <div className="contact-icon-box">
                      <i className="icon-location"></i>
                      <h4>
                        <a href="/gallery">AMC Gallery</a>
                      </h4>
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
