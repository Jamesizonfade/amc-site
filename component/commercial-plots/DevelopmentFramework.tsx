import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export const DevelopmentFramework = () => (
  <div className="row">
    <div className="col-md-6 col-12">
      <Gallery>
        <Item
          original="/img/site-map/commercial-plots/img-sm/DEVELOPMENT-FRAMEWORK.png"
          thumbnail="/img/site-map/commercial-plots/img-sm/DEVELOPMENT-FRAMEWORK.png"
          width="1024"
          height="768"
          title="DEVELOPMENT FRAMEWORK"
        >
          {({ ref, open }) => (
            <div className="shadow-primary p-3">
              <img
                ref={ref}
                onClick={open}
                src="/img/site-map/commercial-plots/img-sm/DEVELOPMENT-FRAMEWORK.png"
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
                  Due to the almost 400meter length of the Main Street, it is
                  proposed that for every 100 meters, there must be a break in
                  the median to allow vehicles to access facilities and
                  destinations in a coordinated way, that will also assist
                  pedestrians to cross the road safely. It is proposed that the
                  bulk of the required parking should be placed at the back of
                  the buildings as shown in the diagram, is further motivated to
                  avoid the building from losing contact with the street
                  activities.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  The proposed land use drawing is based on an interpretation of
                  the land-use analysis. This drawing shows the proposed
                  scenario were all the high intensity uses are located away
                  from the estates main entrance.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  The other uses such as the Hotel, Civic/Convention Centre,
                  Cinemas and Nightclub/ Restaurants are all grouped around the
                  area were you have good access to generous parking and night
                  time activities.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  The grouping of office buildings, banks, Tech Hub and health
                  centre are generally used only during daytime, but it is still
                  within walking distance from the mall.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  Lastly, the grouping with close access to the Estate,
                  consisting of the School, Church and possible Sporting Arena
                  with good linkage to the school.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  The zone located in between the community facilities and the
                  daytime commercial zone would be better suited for medium
                  density Residential development with small scale shops and
                  other small scale service oriented facilities located below.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
