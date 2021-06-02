import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import news from "../../data/news.json";

const News = () => {
  return (
    <Layout title="News">
      {/* Banner */}
      <Banner page="News" />

      {/* Welcome to Obaforex */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          <div className="row mt-30 no-gutters">
            {news.map((rec, idx) => (
              <div
                key={idx}
                className="col-sm-12 col-md-6 col-lg-4 col-12 no-gutter"
              >
                <div className="service-block">
                  <img
                    src={rec?.cover_img}
                    alt="img"
                    className="shadow-primary"
                    style={{ border: "2px solid #f6ecd2" }}
                  />
                  <div
                    className="service-block-content shadow-primary news-desc"
                    style={{
                      backgroundColor: "#f6ecd2",
                      padding: "0",
                    }}
                  >
                    <div
                      style={{
                        background: "#ffffffa1",
                        minHeight: "310px",
                        padding: "40px 20px",
                        borderRadius: "10px",
                      }}
                    >
                      <h4 title={rec?.full_title} style={{ cursor: "pointer" }}>
                        <a href={`/news/singleNews?id=${idx}`}>
                          {rec?.short_title}
                        </a>
                      </h4>
                      <p>{rec?.desc}</p>
                      <a
                        href={`/news/singleNews?id=${idx}`}
                        className="service-block-content-button"
                        title="Read More"
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

export default News;
