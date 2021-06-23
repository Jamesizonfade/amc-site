import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export const DevelopmentFramework2 = () => (
  <div className="row">
    <div className="col-md-6 col-12">
      <Gallery>
        <Item
          original="/img/site-map/commercial-plots/img-sm/DEVELOPMENT-FRAMEWORK2.png"
          thumbnail="/img/site-map/commercial-plots/img-sm/DEVELOPMENT-FRAMEWORK2.png"
          width="1024"
          height="768"
          title="DEVELOPMENT FRAMEWORK"
        >
          {({ ref, open }) => (
            <div className="shadow-primary p-3">
              <img
                ref={ref}
                onClick={open}
                src="/img/site-map/commercial-plots/img-sm/DEVELOPMENT-FRAMEWORK2.png"
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
          <h3 className="semi-bold font-size-32">DEVELOPMENT FRAMEWORK</h3>
          <div className="section-heading-line line-thin"></div>
          <div className="text-content">
            <ul className="primary-list mt-20">
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  The principals objectives behind this framework consist of the
                  following:
                  <ul>
                    <li>
                      To guide and not to restrict the building designs to
                      follow by other practitioners.
                    </li>
                    <li>
                      The aim is to only control those elements that will
                      produce a positive interphase onto the public domain.
                    </li>
                    <li>
                      The intervention on the street layout to provide practical
                      access and movement.
                    </li>
                    <li>
                      The directing of parking to ensure that the building
                      interphase to the street is a positive experience and not
                      crowded by cars.
                    </li>
                    <li>
                      The articulation of the street space to promote easy
                      walking, with clearly articulated destinations.
                    </li>
                    <li>
                      The benefit of considering the whole development, so that
                      individual developers can benefit from a holistic and
                      integrated design.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
