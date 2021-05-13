import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import ownAProperty from "../../data/ownAProperty.json";

const OwnAProperty = () => {
  return (
    <Layout title="Own A Property">
      {/* Banner */}
      <Banner page="Own A Property" />

      {/* Obaforex Academy */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          {/* Title and Desc. */}
          <div className="section-heading text-center mb-5">
            <p>
              To Own a property in Awkwa Millennium City, download any of our
              Forms, Brochure or Price Schedule below and follow the
              instructions accordingly.
            </p>
          </div>

          {/* Plans */}
          <div className="row justify-content-center">
            {ownAProperty.map((rec, idx) => (
              <div
                key={idx}
                className="col-md-6 col-sm-12 col-lg-3 col-12 wow fadeInLeftSm"
                data-wow-delay="0.7s"
              >
                <a href={rec?.url} target="_blank" title="download">
                  <div className="pricing-section shadow-primary property-card">
                    <img src={rec?.img} alt="" />

                    <h6 className="my-3">{rec?.title}</h6>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OwnAProperty;
