import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export const RoadDesign = () => (
  <div className="row">
    <div className="col-md-6 col-12">
      <Gallery>
        <Item
          original="/img/site-map/commercial-plots/img-sm/ROAD-DESIGN-AND-EXISTING-LAND-USE.png"
          thumbnail="/img/site-map/commercial-plots/img-sm/ROAD-DESIGN-AND-EXISTING-LAND-USE.png"
          width="1024"
          height="768"
          title="ROAD DESIGN AND EXISTING LAND-USE"
        >
          {({ ref, open }) => (
            <div className="shadow-primary p-3">
              <img
                ref={ref}
                onClick={open}
                src="/img/site-map/commercial-plots/img-sm/ROAD-DESIGN-AND-EXISTING-LAND-USE.png"
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
    <div className="col-md-6 col-12">
      <div className="pl-30-md">
        <div className="section-heading text-left mt-5">
          <h3 className="semi-bold font-size-32">
            ROAD DESIGN AND EXISTING LAND-USE
          </h3>
          <div className="section-heading-line line-thin"></div>
          <div className="text-content">
            <ul className="primary-list mt-20">
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  According to the masterplan layout, the roads for access and
                  movement in this area has been planned, together with a
                  lighting layout as shown
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  The Site slopes from West to East along the width of the site
                  by between 4 to 5 meters, with drainage
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
