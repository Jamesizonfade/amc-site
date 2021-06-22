import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export const BankingOffices = () => (
  <div className="row">
    <div className="col-12">
      <Gallery>
        <Item
          original="/img/site-map/commercial-plots/img-lg/BANKING-OFFICES-AND-FINANCIAL-CENTRE.png"
          thumbnail="/img/site-map/commercial-plots/img-lg/BANKING-OFFICES-AND-FINANCIAL-CENTRE.png"
          width="1024"
          height="768"
          title="BANKING OFFICES AND FINANCIAL CENTRE"
        >
          {({ ref, open }) => (
            <div className="shadow-primary p-3 text-center">
              <h4>BANKING OFFICES AND FINANCIAL CENTRE</h4>
              <img
                ref={ref}
                onClick={open}
                src="/img/site-map/commercial-plots/img-lg/BANKING-OFFICES-AND-FINANCIAL-CENTRE.png"
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
