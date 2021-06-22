import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export const ProposedIntervention = () => (
  <div className="row">
    <div className="col-md-6 col-12">
      <Gallery>
        <Item
          original="/img/site-map/commercial-plots/img-sm/PROPOSED-INTERVENTION.png"
          thumbnail="/img/site-map/commercial-plots/img-sm/PROPOSED-INTERVENTION.png"
          width="1024"
          height="768"
          title="PROPOSED INTERVENTION"
        >
          {({ ref, open }) => (
            <div className="shadow-primary p-3">
              <img
                ref={ref}
                onClick={open}
                src="/img/site-map/commercial-plots/img-sm/PROPOSED-INTERVENTION.png"
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
          <h3 className="semi-bold font-size-32">PROPOSED INTERVENTION</h3>
          <div className="section-heading-line line-thin"></div>
          <div className="text-content">
            <ul className="primary-list mt-20">
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  In this proposal, we begin to explore the potential of
                  reducing the street boundary, by creating a covered walkway as
                  illustrated in the typical street section.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  This approach allows one to improve the definition of the
                  street space. The whole idea is to create special street
                  spaces and destinations along the street that developers have
                  to respond to.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  The careful articulation of the street definition is what can
                  be controlled by MPI. The response by other developers looking
                  at their own development.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
