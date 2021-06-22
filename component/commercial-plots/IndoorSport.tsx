import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export const IndoorSport = () => (
  <div className="row">
    <div className="col-12">
      <Gallery>
        <Item
          original="/img/site-map/commercial-plots/img-lg/INDOOR-SPORT-CENTRE.png"
          thumbnail="/img/site-map/commercial-plots/img-lg/INDOOR-SPORT-CENTRE.png"
          width="1024"
          height="768"
          title="INDOOR SPORT CENTRE"
        >
          {({ ref, open }) => (
            <div className="shadow-primary p-3 text-center">
              <h4>INDOOR SPORT CENTRE</h4>
              <img
                ref={ref}
                onClick={open}
                src="/img/site-map/commercial-plots/img-lg/INDOOR-SPORT-CENTRE.png"
                style={{
                  margin: "1px",
                  border: "10px solid #d0aa63",
                  cursor: "pointer",
                }}
              />
            </div>
          )}
        </Item>
      </Gallery>
    </div>
  </div>
);
