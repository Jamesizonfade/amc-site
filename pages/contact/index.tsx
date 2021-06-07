import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";

const Contact = () => {
  return (
    <Layout title="Contact Us">
      {/* Banner */}
      <Banner page="Contact us" />

      <div className="section-block grey-bg">
        <div className="background-shape bs-right"></div>
        <div className="container">
          <div className="row">
            {/* Contact us */}
            <div className="col-md-4 col-12">
              <div className="section-heading">
                <h6>Contact Us</h6>
                <p className="semi-bold">
                  We’re Happy to Discuss Awka Millennium City with you and
                  Answer any Question.
                </p>
                <p>...and hey, we are online 24/7</p>
              </div>
            </div>

            {/* Message Form */}
            <div className="col-md-8 col-12">
              <div className="section-heading">
                <h6 className="semi-bold">Write us a message</h6>
              </div>
              <form className="primary-form-2 mt-15" method="post">
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <input type="text" name="name" placeholder="First Name*" />
                  </div>
                  <div className="col-sm-6 col-12">
                    <input type="text" name="name" placeholder="Lasts Name*" />
                  </div>
                  <div className="col-12">
                    <textarea placeholder="Your Message*"></textarea>
                  </div>
                  <div className="col-12 text-right">
                    <button className="button-md button-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Boxes */}
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading">
                    <h6>Our Offices</h6>
                    <p>
                      Reach Us on any of our Offices below. <br /> We are
                      constantly at your service
                    </p>
                  </div>
                </div>
                {/* Lagos Office */}
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <div
                    className="testmonial-item-5 test-card2"
                    style={{ minHeight: "260px" }}
                  >
                    <h5>
                      <i className="fa fa-map-marker-alt contact-icon"></i>Lagos
                      Office
                    </h5>
                    <div className="testmonial-item-5-text mb-3">
                      <p>
                        Plot 25, 68 Bisola Durosinmi Etti drive, Lekki Phase 1,
                        Lagos
                      </p>
                      <p>
                        Call : <strong className="prop">09060004203</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Abuja Office */}
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <div
                    className="testmonial-item-5 test-card2"
                    style={{ minHeight: "260px" }}
                  >
                    <h5>
                      <i className="fa fa-map-marker-alt contact-icon"></i>Abuja
                      Office
                    </h5>
                    <div className="testmonial-item-5-text mb-3">
                      <p>
                        Plot 114 (House 1), Ebitu Ukiwe Street, Jabi, Abuja.
                      </p>
                      <p>
                        Call : <strong className="prop">0906000420</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Anambra Office */}
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <div
                    className="testmonial-item-5 test-card2"
                    style={{ minHeight: "260px" }}
                  >
                    <h5>
                      <i className="fa fa-map-marker-alt contact-icon"></i>
                      Anambra Office
                    </h5>
                    <div className="testmonial-item-5-text mb-3">
                      <p>
                        50 Ifite Road, off Aroma Junction, Awka, Anambra State.
                      </p>
                      <p>
                        Call :{" "}
                        <strong className="prop">
                          09060004205, 09060004206.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.237450532857!2d8.863871717443848!3d9.830413700000026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105375a46a35b1a7%3A0xe6245d4ae13fdfc6!2sObaforex%20Global%20Trading!5e0!3m2!1sen!2sng!4v1618650461578!5m2!1sen!2sng"
          className="full-width"
          height="400"
          style={{ border: "0" }}
        ></iframe>
      </div>
    </Layout>
  );
};

export default Contact;
