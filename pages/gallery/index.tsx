import { Layout } from "../../component/Layout";
import { Banner } from "../../component/Banner";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import gallery from "../../data/gallery.json";

const GalleryPage = () => {
  return (
    <Layout title="Gallery">
      {/* Banner */}
      <Banner page="Gallery" />

      <div className="section-block section-sm border-bottom partners">
       <div className="container">
          <div className="row mt-30 no-gutters">
            {gallery.map((rec, idx) => (
              <div
               key={idx}
                className="col-sm-12 col-md-6 col-lg-4 col-12 no-gutter"
              >
                <div className="service-block">
                  {/* Image */}
                  <a
                          href={`/gallery/singleGallery?id=${idx}`}
                          style={{ zIndex: 100 }}
                        >
                           <img
                    src={rec?.thumbnail_image}
                    alt="img"
                    className="shadow-primary"
                    style={{  
                    cursor: "pointer",
                    margin: "1px",
                    border: "5px solid lightgrey", 
                    zIndex: 1 
                   }}
                  
                  />
                  <h4 
                  style={{
                    color: "#af8514 !important",
                  }}
                  >
                  {rec?.short_title}
                  </h4>
                        </a>
                    <h5
                        style={{
                          color: "#2C3333 !important",
                          fontSize: "14px",
                          opacity: "0.8",
                          marginBottom: "20px",
                        }}
                      >
                        {rec?.date}
                    </h5>


                </div>
              </div>
             ))}
         </div>
       </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
