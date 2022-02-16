import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import {Gallery,Item} from "react-photoswipe-gallery";
import gallery from "../../data/gallery.json";


const SingleGallery = ({ id }) => {
    const { images } = gallery[parseInt(id)];

    return (
      <Layout title="Gallery">
        {/* Banner */}
        <Banner page="Gallery" />

        <div className="section-block section-sm border-bottom partners">
        <div className="text-center">

          {/* images */}
          <div className="p-5 border-bottom">
          
          <Gallery >
          <div className="row">
            { images.map((image, index) => {
              return (
                <Item
                  key={index}
                  original={image}
                  thumbnail={image}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <div className="col-12 col-md-6 col-lg-6 p-1">
                      <img
                        // @ts-ignore
                        ref={ref}
                        onClick={open}
                        src={image}
                        loading="lazy"
                        style={{
                          margin: "1px",
                          border: "10px solid lightgrey",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    
                  )}
                </Item>
              )
            }) }
           </div>
          </Gallery>
         
          
          </div>
          {/* {images.length > 0 && (
            <div className="p-5 border-bottom">
              <div className="row">
                { images.map((rec, idx) => (
                  
                  <div key={idx} className="col-12 col-md-6 col-lg-6 p-1">
                    <div
                      className="shadow-primary mb-5"
                      style={{
                        background: "#ffba002b",
                        margin: "1px",
                        border: "10px solid lightgrey",
                        cursor: "pointer",
                        width:"1024",
                        height:"768"
                      }}
                    >
                      <img loading="lazy" src={rec} alt="" style={{ width: "100%" }} />
                    </div>
                  </div>
                ))}

              </div>
             
            </div>
          )} */}

        </div>
      </div>


      </Layout>
    );
  };
  
  SingleGallery.getInitialProps = async ({ query }) => {
    return { id: query?.id };
  };
  
  export default SingleGallery;
  