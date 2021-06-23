import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export const InterventionExamples = () => (
  <div className="row">
    <div className="col-md-6 col-12">
      <Gallery>
        <Item
          original="/img/site-map/commercial-plots/img-sm/INTERVENTION-EXAMPLES-BUILDING-PLACEMENT.png"
          thumbnail="/img/site-map/commercial-plots/img-sm/INTERVENTION-EXAMPLES-BUILDING-PLACEMENT.png"
          width="1024"
          height="768"
          title="INTERVENTION EXAMPLES: BUILDING PLACEMENT"
        >
          {({ ref, open }) => (
            <div className="shadow-primary p-3">
              <img
                ref={ref}
                onClick={open}
                src="/img/site-map/commercial-plots/img-sm/INTERVENTION-EXAMPLES-BUILDING-PLACEMENT.png"
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
            INTERVENTION EXAMPLES: BUILDING PLACEMENT
          </h3>
          <div className="section-heading-line line-thin"></div>
          <div className="text-content">
            <ul className="primary-list mt-20">
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  The before and after illustrations shown are American examples
                  called Urban Repair Toolkit’s.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  They illustrate how car dominated spaces can be converted to a
                  more pedestrian friendly environment by getting buildings
                  closer to the street, and defining the public domain.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
