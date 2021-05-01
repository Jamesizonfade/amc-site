export const Footer = () => {
  return (
    <footer>
      <div className="footer-1">
        <div className="container">
          <div className="row">
            {/* Lagos Office */}
            <div className="col-md-3 col-sm-6 col-12">
              <h2>Lagos Office</h2>
              <div className="row mt-25">
                <div className="col-12">
                  {/* Number and Email */}
                  <ul className="footer-nav">
                    <li>
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      Plot 25, 68 Bisola Durosinmi Etti drive, Lekki Phase 1,
                      Lagos.
                    </li>
                    <li>
                      <i className="fas fa-phone mr-2"></i>
                      <a href="tel:09060004203">09060004203</a>
                    </li>
                    <li>
                      <a href="#" className="ml-4">
                        Privacy notice
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Abuja Office */}
            <div className="col-md-3 col-sm-6 col-12">
              <h2>Abuja Office</h2>
              <div className="row mt-25">
                <div className="col-12">
                  {/* Number and Email */}
                  <ul className="footer-nav">
                    <li>
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      Plot 114 (House 1), Ebitu Ukiwe Street, Jabi, Abuja.
                    </li>
                    <li>
                      <i className="fas fa-phone mr-2"></i>
                      <a href="tel:0906000420">0906000420</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Anambra Office */}
            <div className="col-md-3 col-sm-6 col-12">
              <h2>Anambra Office</h2>
              <div className="row mt-25">
                <div className="col-12">
                  {/* Number and Email */}
                  <ul className="footer-nav">
                    <li>
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      50 Ifite Road, off Aroma Junction, Awka, Anambra State.
                    </li>
                    <li>
                      <i className="fas fa-phone mr-2"></i>
                      <a href="tel:09060004205">09060004205, 09060004206.</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/*Info links */}
            <div className="col-md-3 col-sm-6 col-12">
              <h2>Latest News</h2>
              <div className="row mt-25">
                <div className="col-12">
                  <ul className="footer-nav">
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Site Update</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright and Social Icons */}
          <div className="footer-1-bar">
            <div className="row">
              {/* Copyright */}
              <div className="col-xs-12 col-lg-6 my-3">
                <p>
                  © Copyright 2021{" "}
                  <span className="text-off-white">AWKA MILLENNIUM CITY,</span>{" "}
                  All rights reserved.{" "}
                  <span style={{ color: "#999" }}>developed by</span>{" "}
                  <a href="http://looptrace.com" style={{ color: "#1652f0" }}>
                    Looptrace Ltd
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
