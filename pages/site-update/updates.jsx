import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import site_update from "../../data/siteUpdate.json";

const Updates = ({ id }) => {
  return (
    <Layout title="Site Update">
      {/* Banner */}
      <Banner page={`Site Update ( ${site_update[id].date_range} )`} />

      <div className="section-block section-sm border-bottom partners">
        <div className="container">
          <Gallery>
            {site_update[id].updates.map((rec, idx) => (
              <Item
                key={idx}
                original={rec?.original_img}
                thumbnail={rec?.thumbnail_img}
                width="1024"
                height="768"
                title={rec?.desc}
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={rec?.thumbnail_img}
                    style={{
                      margin: "1px",
                      border: "10px solid lightgrey",
                      cursor: "pointer",
                    }}
                  />
                )}
              </Item>
            ))}
          </Gallery>
        </div>
      </div>
    </Layout>
  );
};

Updates.getInitialProps = async ({ query }) => {
  return { id: query?.id };
};

export default Updates;
