import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export const TypicalStreet = () => (
  <div className="row">
    <div className="col-md-6 col-12">
      <Gallery>
        <Item
          original="/img/site-map/commercial-plots/img-sm/TYPICAL-STREET-BLOCK.png"
          thumbnail="/img/site-map/commercial-plots/img-sm/TYPICAL-STREET-BLOCK.png"
          width="1024"
          height="768"
          title="TYPICAL STREET BLOCK "
        >
          {({ ref, open }) => (
            <div className="shadow-primary p-3">
              <img
                ref={ref}
                onClick={open}
                src="/img/site-map/commercial-plots/img-sm/TYPICAL-STREET-BLOCK.png"
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
          <h3 className="semi-bold font-size-32">TYPICAL STREET BLOCK</h3>
          <div className="section-heading-line line-thin"></div>
          <div className="text-content">
            <ul className="primary-list mt-20">
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  The fundamental basis of the current proposal, is the
                  intervention required to provide access and parking to the
                  various properties. With the assumption that it would be too
                  costly to widen the road to accommodate street parking, the
                  proposal is to create a rhythm of +- 100meters were property
                  owners can gain access to limited parking in front of their
                  respective buildings. This arrangement also allows for points
                  of safety for pedestrians.
                </div>
              </li>
              <li>
                <div className="icon-sm">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="icon-text">
                  A preliminary study reflected on this drawing indicates that
                  this arrangement may be able to cater for the pedestrians
                  along the sidewalk as well. Ideally, supplementary lighting
                  should be provided on the sidewalks to make these spaces safe
                  at night.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
