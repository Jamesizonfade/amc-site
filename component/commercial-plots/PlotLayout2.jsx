import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export const PlotLayout2 = () => (
  <div className="row">
    <div className="col-md-6 col-12">
      <Gallery>
        <Item
          original="/img/site-map/commercial-plots/img-sm/PLOT-LAYOUT-AND-LAND-USE-PROPOSAL.png"
          thumbnail="/img/site-map/commercial-plots/img-sm/PLOT-LAYOUT-AND-LAND-USE-PROPOSAL.png"
          width="1024"
          height="768"
          title="PLOT LAYOUT AND LAND USE PROPOSAL"
        >
          {({ ref, open }) => (
            <div className="shadow-primary p-3">
              <img
                ref={ref}
                onClick={open}
                src="/img/site-map/commercial-plots/img-sm/PLOT-LAYOUT-AND-LAND-USE-PROPOSAL.png"
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
            PLOT LAYOUT AND LAND USE PROPOSAL
          </h3>
          <div className="section-heading-line line-thin"></div>
          <div className="text-content">
            <ul className="primary-list mt-20">
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  The land-use allocation on this plot plan follows the
                  preferred land-use scenario derived from the previous slide.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  The plot areas shown are conceptual and may be adjusted
                  according to market demand.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  Plots may be sub-divided or consolidated.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
