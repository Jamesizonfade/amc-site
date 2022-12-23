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
                    <input type="text" name="name" placeholder="Last Name*" />
                  </div>
                  <div className="col-sm-6 col-12">
                    <input type="text" name="name" placeholder="Phone No*" />
                  </div>
                  <div className="col-sm-6 col-12">
                    <input type="text" name="name" placeholder="Email*" />
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
                        Call : <br /> <strong className="prop">09060004206, 09060004203, <br /> 09060004205, 09060004204 </strong>
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
                      Call : <br /> <strong className="prop">09060004206, 09060004203, <br /> 09060004205, 09060004204 </strong>
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
                      Call : <br /> <strong className="prop">09060004206, 09060004203, <br /> 09060004205, 09060004204 </strong>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374853.8242706969!2d7.174687957322112!3d6.263753531190453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104379e327f4e263%3A0x2a4e473a6a8ae27c!2sAwka%20Millennium%20City!5e0!3m2!1sen!2sng!4v1623850942477!5m2!1sen!2sng"
          height="400"
          className="full-width"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Contact;
