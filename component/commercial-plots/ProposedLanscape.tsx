import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export const ProposedLanscape = () => (
  <div className="row">
    <div className="col-md-6 col-12">
      <Gallery>
        <Item
          original="/img/site-map/commercial-plots/img-sm/PROPOSED-LANDSCAPE.png"
          thumbnail="/img/site-map/commercial-plots/img-sm/PROPOSED-LANDSCAPE.png"
          width="1024"
          height="768"
          title="PROPOSED LANDSCAPE"
        >
          {({ ref, open }) => (
            <div className="shadow-primary p-3">
              <img
                ref={ref}
                onClick={open}
                src="/img/site-map/commercial-plots/img-sm/PROPOSED-LANDSCAPE.png"
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
          <h3 className="semi-bold font-size-32">PROPOSED LANDSCAPE</h3>
          <div className="section-heading-line line-thin"></div>
          <div className="text-content">
            <ul className="primary-list mt-20">
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  As the street landscape will be the basis of what the public
                  will perceive from the public domain.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  The landscape concept builds on the access and movement
                  proposal with the following articulation points:
                  <ul>
                    <li>
                      The planting of palm trees to celebrate the rhythm of all
                      access junctions, and end destinations
                    </li>
                    <li>
                      The articulation of the Cul-de-Sac as a special focus area
                    </li>
                    <li>
                      The two Parks positioned as a focus at the end of the two
                      access roads, each with its own character, namely the Oval
                      Park positioned between the school and the sports
                      facility, and Palm Lake Park (functioning as stormwater
                      retention dams) adjacent to the hotel development. In both
                      cases the adjoining property development can spill out
                      onto these spaces while serving as outdoor functional
                      spaces.
                    </li>
                    <li>
                      The planting of Shade Trees should commence along the
                      remaining street, to create a green canopy along the
                      street edge.
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
