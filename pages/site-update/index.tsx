import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import site_update from "../../data/siteUpdate.json";

const SiteUpdate = () => {
  return (
    <Layout title="Site Update">
      {/* Banner */}
      <Banner page="Site Update" />

      <div className="section-block section-sm border-bottom partners">
        <div className="container">
          <div className="row mt-30 no-gutters">
            {site_update.map((rec, idx) => (
              <div key={idx} className="col-sm-12 col-md-6 col-lg-4 col-12">
                <div className="service-block">
                  <div
                    className="service-block-content shadow-primary"
                    style={{
                      padding: "0",
                      backgroundImage: `url('${rec?.cover_img}')`,
                      backgroundSize: "cover",
                      borderRadius: "0",
                      marginBottom: "40px",
                      border: "10px solid lightgrey",
                    }}
                  >
                    <div
                      style={{
                        background: "#00000094",
                        minHeight: "250px",
                        padding: "40px 20px",
                        borderRadius: "0",
                      }}
                    >
                      <p
                        className="shadow-primary"
                        style={{
                          color: "#af8514 !important",
                          margin: "20px",
                        }}
                      >
                        {rec?.date_range}
                      </p>
                      {/* Description */}
                      <p style={{ color: "#b6b6b6 !important" }}>
                        {rec?.cover_desc}
                      </p>

                      {/* View Updates button */}
                      <a
                        href={`/site-update/updates?id=${idx}`}
                        className="service-block-content-button"
                        title="View Updates"
                      >
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SiteUpdate;
