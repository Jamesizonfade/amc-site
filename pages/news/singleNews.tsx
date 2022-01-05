import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import news from "../../data/news.json";

const SingleNews = ({ id }) => {
  return (
    <Layout title="News">
      {/* Banner */}
      <Banner page="News" />

      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          {/* full_title and description */}
          <div className="section-heading text-center">
            <h3 className="semi-bold font-size-33">
              {news[parseInt(id)].full_title}
            </h3>
            <div className="section-heading-line line-thin"></div>
            <p>{news[parseInt(id)].desc}</p>
          </div>
          {/* top_img */}
          {news[parseInt(id)].top_img && (
            <div
              className="shadow-primary my-5"
              style={{
                padding: "30px",
                background: "#ffba002b",
              }}
            >
              <img
                src={news[parseInt(id)].top_img}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          )}

          {/* body_content1 */}
          {news[parseInt(id)].body_content1.map((rec, idx) => (
            <>
              <p key={idx}>{rec}</p> <br />
            </>
          ))}

          {/* body_img_title */}
          <h5 className="mt-3 d-block mb-3">
            {news[parseInt(id)].body_img_title}
          </h5>

          {/* body_img1 */}
          {news[parseInt(id)].body_img1 && (
            <div
              className="shadow-primary mt-5 mb-5"
              style={{
                padding: "30px",
                background: "#ffba002b",
              }}
            >
              <img
                src={news[parseInt(id)].body_img1}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          )}

          {/* body_video */}
          {news[parseInt(id)].body_video && (
            <div
              className="shadow-primary mt-5 mb-5"
              style={{
                padding: "30px",
                textAlign: "center",
                // marginLeft: "20px",
                background: "",
              }}
            >
              <video width="85%" height="85%" controls>
              <source src={news[parseInt(id)].body_video} type="video/mp4"/>
                alt=""
                {/* style={{ width: "100%" }} */}
              </video>
            </div>
          )}

          {/* body_content2 */}
          {news[parseInt(id)].body_content2.map((rec, idx) => (
            <>
              <p key={idx}>{rec}</p> <br />
            </>
          ))}

          {/* bottom_imgs_title */}
          <h5 className="mt-3 d-block mb-3">
            {news[parseInt(id)].bottom_imgs_title}
          </h5>

          {/* bottom_imgs */}
          {news[parseInt(id)].bottom_imgs.length > 0 && (
            <div className="row">
              {news[parseInt(id)].bottom_imgs.map((rec, idx) => (
                <div key={idx} className="col-12 col-md-6 col-lg-4 p-1">
                  <div
                    className="shadow-primary mb-5"
                    style={{
                      padding: "10px",
                      background: "#ffba002b",
                    }}
                  >
                    <img src={rec} alt="" style={{ width: "100%" }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

SingleNews.getInitialProps = async ({ query }) => {
  return { id: query?.id };
};

export default SingleNews;
