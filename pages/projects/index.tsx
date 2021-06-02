import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import { TwoBedroom } from "../../component/TwoBedroomSlide";
import { FourBedroomDetached } from "../../component/FourBedroomDSlide";
import { FourBedroomTerrace } from "../../component/FourBedroomTSlide";
import { FiveBedroom } from "../../component/FiveBedroomSlide";

const Projects = () => {
  return (
    <Layout title="Projects">
      {/* Banner */}
      <Banner page="Projects" />

      {/* Master Plan */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <img
                src="/img/site-map/master-plan.png"
                className="rounded-border shadow-primary project-img"
                alt=""
              />
            </div>
            <div className="col-md-6 col-12">
              <div className="pl-30-md">
                <div className="section-heading text-left mt-5">
                  <h3 className="semi-bold font-size-32">Master Plan</h3>
                  <div className="section-heading-line line-thin"></div>
                  <div className="text-content">
                    <p>
                      The Awka Millennium City (AMC) is strategically located in
                      the Awka municipality within the environ of the new
                      Government State House and Secretariat Complex .This fully
                      equipped Millennium city is thoughtfully designed with an
                      array of amenities ranging from a proper drainage system
                      to pedestrian friendly sidewalks. It has a commercial
                      area, located within walking distance of the homes.
                    </p>

                    <h5>AMC is an iconic residential neighborhood offering:</h5>

                    <div className="row">
                      <div className="col-sm-6 col-md-6">
                        <ul className="primary-list mt-20">
                          <li>
                            <div className="icon-sm">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="icon-text">
                              Gated and secure community
                            </div>
                          </li>
                          <li>
                            <div className="icon-sm">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="icon-text">
                              We give you accurate signals
                            </div>
                          </li>
                          <li>
                            <div className="icon-sm">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="icon-text">
                              Constant power and water supply
                            </div>
                          </li>
                          <li>
                            <div className="icon-sm">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="icon-text">
                              Modern access control and surveillance cameras
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <ul className="primary-list mt-20">
                          <li>
                            <div className="icon-sm">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="icon-text">
                              Road and drainage networks
                            </div>
                          </li>
                          <li>
                            <div className="icon-sm">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="icon-text">
                              Recreational amenities and parks
                            </div>
                          </li>
                          <li>
                            <div className="icon-sm">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="icon-text">Commercial areas</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Residential Plots */}
      <div className="section-block section-sm border-bottom partners">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 p-text">
              <div className="section-heading text-left mt-5">
                <h3 className="semi-bold font-size-32">Residential Plots</h3>
                <div className="section-heading-line line-thin"></div>
                <div className="text-content">
                  <ul className="primary-list mt-20">
                    <li>
                      <div className="icon-sm">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="icon-text">
                        Low density residential area
                      </div>
                    </li>
                    <li>
                      <div className="icon-sm">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="icon-text">
                        Medium density residential area
                      </div>
                    </li>
                    <li>
                      <div className="icon-sm">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="icon-text">
                        High density residential area
                      </div>
                    </li>
                  </ul>
                  <br />
                  <h5>Low Density Residential Area</h5>
                  <p>
                    The residential plots available in the low density
                    residential area of the community constitutes premium
                    1000sqm plots. These plots will be allocated solely for the
                    purpose of accommodating single family homes. This plots
                    will also be referred to as Villa Plots.
                  </p>

                  <h5>High Density Residential Area</h5>
                  <p>
                    This area of the residential community will consist of
                    various size plots designed to accommodate various kinds of
                    multiple family homes such as apartment buildings, terrace
                    buildings etc.
                  </p>

                  <h5>Exclusive Enclave</h5>
                  <p>
                    This is an exclusive enclave within AMC which will sit plots
                    of 2000sqm and above collocated amongst each other. This
                    area will boast its own ”central park”, and also have its
                    dedicated access control for people the live within the
                    enclave. It is limited to about 40 plots.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 p-img">
              <img
                src="/img/site-map/residential-plot.png"
                className="rounded-border shadow-primary project-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Commercial / Institutional Plots */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <img
                src="/img/site-map/commercial.png"
                className="rounded-border shadow-primary project-img"
                alt=""
              />
            </div>
            <div className="col-md-6 col-12">
              <div className="pl-30-md">
                <div className="section-heading text-left mt-5">
                  <h3 className="semi-bold font-size-32">
                    Commercial / Institutional Plots
                  </h3>
                  <div className="section-heading-line line-thin"></div>
                  <div className="text-content">
                    <p>
                      The Commercial area of the community will be located
                      outside the residential area towards the estate entrance,
                      ensuring the serenity of the residential community is
                      maintained, while still being accessible to non-residents.
                    </p>

                    <h5>The commercial area will consist of :</h5>

                    <ul className="primary-list mt-20">
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">Leisure</div>
                      </li>
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">Shopping</div>
                      </li>
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">Health facilities</div>
                      </li>
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">Educational facilities</div>
                      </li>
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">Religious facilities</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Millennium Park */}
      <div className="section-block section-sm border-bottom partners">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 p-text">
              <div className="section-heading text-left mt-5">
                <h3 className="semi-bold font-size-32">Millennium Park</h3>
                <div className="section-heading-line line-thin"></div>
                <div className="text-content">
                  <p>
                    AMC will boast a Millennium Park which will consist of
                    various recreational facilities such as playgrounds, picnic
                    areas, etc. It will also serve as an event center where
                    residents can host external guests for various functions.
                    There will be a jogging track surrounding the Millennium
                    Park which will also serve as a platform for morning
                    exercises, walking pets, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 p-img">
              <img
                src="/img/site-map/Recreational.png"
                className="rounded-border shadow-primary project-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Utility Area */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <img
                src="/img/site-map/utility.png"
                className="rounded-border shadow-primary project-img"
                alt=""
              />
            </div>
            <div className="col-md-6 col-12">
              <div className="pl-30-md">
                <div className="section-heading text-left mt-5">
                  <h3 className="semi-bold font-size-32">Utility Area</h3>
                  <div className="section-heading-line line-thin"></div>
                  <div className="text-content">
                    <h5>
                      The utility area of Awka Millennium City would consist of
                      the bulk infrastructures such as:
                    </h5>

                    <ul className="primary-list mt-20">
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">
                          Water pump station, reservoirs and tanks
                        </div>
                      </li>
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">Power supply</div>
                      </li>
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">
                          Industrial borehole & water treatment
                        </div>
                      </li>
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">
                          Central refuse collection
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roads */}
      <div className="section-block section-sm border-bottom partners">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 p-text">
              <div className="section-heading text-left mt-5">
                <h3 className="semi-bold font-size-32">Roads</h3>
                <div className="section-heading-line line-thin"></div>
                <div className="text-content">
                  <h5>
                    The community will be adequately serviced by a well planned
                    road network, which will comprise :
                  </h5>

                  <ul className="primary-list mt-20">
                    <li>
                      <div className="icon-sm">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="icon-text">
                        Sub Arterial roads: access link road from main highway
                      </div>
                    </li>
                    <li>
                      <div className="icon-sm">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="icon-text">
                        Residential distribution road networks
                      </div>
                    </li>
                    <li>
                      <div className="icon-sm">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="icon-text">
                        Residential Access Road Networks
                      </div>
                    </li>
                    <li>
                      <div className="icon-sm">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="icon-text">
                        Residential close Road networks
                      </div>
                    </li>
                    <li>
                      <div className="icon-sm">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="icon-text">Pedestrian walkways etc.</div>
                    </li>
                    <li>
                      <div className="icon-sm">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="icon-text">Street lights</div>
                    </li>
                    <li>
                      <div className="icon-sm">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="icon-text">Storm water drainage</div>
                    </li>
                  </ul>

                  <p>
                    These various road networks will ensure well structured and
                    organized traffic flow movement within the community.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 p-img">
              <img
                src="/img/site-map/roads.png"
                className="rounded-border shadow-primary project-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Homes */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          {/* Title and Desc. */}
          <div className="section-heading text-center mb-5">
            <h3 className="semi-bold font-size-35">Homes</h3>
            <div className="section-heading-line line-thin"></div>
          </div>
          <h4>Prototypes</h4>
          <br />
          <p>
            As a supplement to the provision of serviced plots, M-P
            Infrastructure will also provide the option of constructing
            residential buildings for potential clients/residents who are
            interested. We will be providing these services under the following
            categories/specifications.
          </p>

          <ul className="primary-list mt-20">
            <li>
              <div className="icon-sm">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="icon-text">
                Sub Arterial roads: access link road from main highway
              </div>
            </li>
            <li>
              <div className="icon-sm">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="icon-text">2 bed apartment building.</div>
            </li>
            <li>
              <div className="icon-sm">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="icon-text">4 bed terrace houses.</div>
            </li>
            <li>
              <div className="icon-sm">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="icon-text">4 bed detached duplex.</div>
            </li>
            <li>
              <div className="icon-sm">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="icon-text">5 bed villa.</div>
            </li>
          </ul>
          <br />
          <h6>
            The images below are the architectural designs of the buildings that
            will be made available for construction.
          </h6>
        </div>
      </div>

      {/* Two Bedroom Apartment Buildings */}
      <TwoBedroom />
      {/* Four bedroom duplex */}
      {/* Four Bedroom Detached Duplex */}
      <FourBedroomDetached />

      {/* Four Bedroom Terrace Houses */}
      <FourBedroomTerrace />

      {/* Five Bedroom Villa */}
      <FiveBedroom />
    </Layout>
  );
};

export default Projects;
