import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import { Partners } from "../../component/Partners";

const About = () => {
  return (
    <Layout title="About Us">
      {/* Banner */}
      <Banner page="About Us" />

      {/* About Obaforex */}
      <div className="section-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 d-none d-md-block">
              <img
                src="/img/about/about-img.png"
                className="rounded-border shadow-primary"
                alt=""
              />
            </div>
            <div className="col-md-6 col-12">
              <div className="pl-30-md">
                <div className="section-heading text-left mt-5">
                  <small className="text-scondary">Who we are</small>
                  <h3 className="semi-bold font-size-32">
                    We Trade. We Manage. We Train. We Signal
                  </h3>
                  <div className="section-heading-line line-thin"></div>
                  <div className="text-content">
                    <p>
                      We are a global foreign currency and investment company
                      which started operations in March, 2019 to take advantage
                      of the blockchain and emerging technologies and build a
                      sustainable financial system for investors.
                      <br />
                      We focus on delivering quantifiable results for our
                      clients, based on a well-tested methodology and solid
                      experience. Obaforex is managed by a young team with
                      expertise and experience from the fields of management,
                      information technology, finance, sales and marketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flexibility, Integrity and Profitability */}
          <div className="row mt-40">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="features-box">
                <div className="features-box-icon">
                  <i className="icon-locked-combination-padlock-stroke"></i>
                </div>
                <div className="features-box-content">
                  <h3>Flexibility</h3>
                  <p>
                    We believe in creative adaptation to changing business
                    realities for sustainability and increased profitability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="features-box">
                <div className="features-box-icon">
                  <i className="icon-marketing"></i>
                </div>
                <div className="features-box-content">
                  <h3>Integrity and Transparency</h3>
                  <p>
                    We believe that a lasting and rewarding relationship is
                    built on mutual respect and trust
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="features-box">
                <div className="features-box-icon">
                  <i className="icon-chess"></i>
                </div>
                <div className="features-box-content">
                  <h3>Profitability</h3>
                  <p>
                    We believe that our primary aim is to produce healthy profit
                    to our investors. we are commited to our promises
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners */}
      <Partners />
    </Layout>
  );
};

export default About;
