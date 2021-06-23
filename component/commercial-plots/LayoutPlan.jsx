import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export const LayoutPlan = () => (
  <div className="row">
    <div className="col-md-6 col-12">
      <Gallery>
        <Item
          original="/img/site-map/commercial-plots/img-sm/LAYOUT-PLAN.png"
          thumbnail="/img/site-map/commercial-plots/img-sm/LAYOUT-PLAN.png"
          width="1024"
          height="768"
          title="LAYOUT PLAN"
        >
          {({ ref, open }) => (
            <div className="shadow-primary p-3">
              <img
                ref={ref}
                onClick={open}
                src="/img/site-map/commercial-plots/img-sm/LAYOUT-PLAN.png"
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
          <h3 className="semi-bold font-size-32">LAYOUT PLAN</h3>
          <div className="section-heading-line line-thin"></div>
          <div className="text-content">
            <ul className="primary-list mt-20">
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  The integrated development proposal shown overleaf is
                  representative of the form that the development may take.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  This plan is also a function of the various layers that
                  informed the solution namely:
                  <ul>
                    <li>
                      The proposed zoning and clustering of the various
                      land-uses.
                    </li>
                    <li>The concept of access, movement and parking.</li>
                    <li>The landscape design</li>
                    <li>
                      The articulation of urban space to accommodate convenient
                      walking distances
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  It is important to emphasis that this layout is not a Master
                  Plan, but a development proposal based on a Development
                  Framework, that will allow different responses in the actual
                  building form, provide it fits within the framework.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">See ilustration on the left.</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
