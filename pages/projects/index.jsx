import residential from "../../data/residentialArea.json";
import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import { TwoBedroom } from "../../component/TwoBedroomSlide";
import { FourBedroomDetached } from "../../component/FourBedroomDSlide";
import { FourBedroomTerrace } from "../../component/FourBedroomTSlide";
import { FiveBedroom } from "../../component/FiveBedroomSlide";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

// Imports for Commercial Plots
import { RoadDesign } from "../../component/commercial-plots/RoadDesign";
import { PlotLayout } from "../../component/commercial-plots/PlotLayout";
import { Prefered } from "../../component/commercial-plots/Prefered";
import { DevelopmentFramework } from "../../component/commercial-plots/DevelopmentFramework";
import { ProposedLandUse } from "../../component/commercial-plots/ProposedLandUse";
import { PlotLayout2 } from "../../component/commercial-plots/PlotLayout2";
import { InterventionExamples } from "../../component/commercial-plots/InterventionExamples";
import { TypicalStreet } from "../../component/commercial-plots/TypicalStreet";
import { Setbacks } from "../../component/commercial-plots/Setbacks";
import { ProposedIntervention } from "../../component/commercial-plots/ProposedIntervention";
import { LayoutPlan } from "../../component/commercial-plots/LayoutPlan";
import { DevelopmentFramework2 } from "../../component/commercial-plots/DevelopmentFramework2";
import { SmartTechnology } from "../../component/commercial-plots/SmartTechnology";
import { AerialView } from "../../component/commercial-plots/AerialView";
import { CommercialBoulevard } from "../../component/commercial-plots/CommercialBoulevard";
import { CentralNode } from "../../component/commercial-plots/CentralNode";
import { PalmLake } from "../../component/commercial-plots/PalmLake";
import { Retail } from "../../component/commercial-plots/Retail";
import { MixedUse } from "../../component/commercial-plots/MixedUse";
import { RetailEntertainment } from "../../component/commercial-plots/RetailEntertainment";
import { Cinemas } from "../../component/commercial-plots/Cinemas";
import { Hotel } from "../../component/commercial-plots/Hotel";
import { CivicConvention } from "../../component/commercial-plots/CivicConvention";
import { NightClub } from "../../component/commercial-plots/NightClub";
import { TechHub } from "../../component/commercial-plots/TechHub";
import { DayHospital } from "../../component/commercial-plots/DayHospital";
import { BankingOffices } from "../../component/commercial-plots/BankingOffices";
import { Residential } from "../../component/commercial-plots/Residential";
import { Church } from "../../component/commercial-plots/Church";
import { IndoorSport } from "../../component/commercial-plots/IndoorSport";
import { School } from "../../component/commercial-plots/School";


const Projects = () => {
  return (
    <Layout title="Project">
      {/* Banner */}
      <Banner page="Project" />

      {/* Master Plan */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="shadow-primary p-3">
                <Gallery>
                  <Item
                    original="/img/site-map/Master-Plan.png"
                    thumbnail="/img/site-map/Master-Plan.png"
                    width="1024"
                    height="768"
                    title="Master Plan"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src="/img/site-map/Master-Plan.png"
                        style={{
                          margin: "1px",
                          border: "10px solid #d0aa63",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </Item>
                </Gallery>
              </div>
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
                        Very low density residential area
                      </div>
                    </li>
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
                  <h5>Very Low Density Residential Area</h5>
                  <p>
                    An enclave of a limited number of exclusive premium mansion
                    plots starting from 2000sqm. With its own dedicated access
                    control and ornamental garden areas, this enclave will
                    provide an ultra luxury serene living experience for its
                    residence.
                  </p>

                  <h5>Low Density Residential Area</h5>
                  <p>
                    The residential plots available in the low density
                    residential area of the community constitutes premium
                    1000sqm plots. This plots will be allocated solely for the
                    purpose of accommodating single family homes. This plots
                    will also be referred to as Villa Plots.
                  </p>

                  <h5>Medium Density Residential Area</h5>
                  <p>
                    This area of the residential community boasts of 500sqm
                    plots which are solely for accommodating single family
                    homes. These plots are referred to as Standard Plots.
                  </p>

                  <h5>High Density Residential Area</h5>
                  <p>
                    This area of the residential community consists of
                    multi-level housing developments such as apartment buildings
                    and condos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 p-img">
              <div className="rounded-border shadow-primary project-img">
                <Gallery>
                  {residential.map((rec, idx) => (
                    <Item
                      key={idx}
                      original={rec?.img}
                      thumbnail={rec?.img}
                      width="1024"
                      height="768"
                      title={rec?.title}
                    >
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={rec?.img}
                          style={{
                            margin: "1px",
                            border: "10px solid #d0aa63",
                            cursor: "pointer",
                          }}
                        />
                      )}
                    </Item>
                  ))}
                </Gallery>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commercial / Institutional Plots */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          {/* Title and Desc. */}
          <div>
            <div className="section-heading text-center mb-5">
              <h3 className="semi-bold font-size-35">
                Commercial / Institutional Plots
              </h3>
              <div className="section-heading-line line-thin"></div>
            </div>
            <br />
            <p>
              The Commercial area of the community will be located outside the
              residential area towards the estate entrance, ensuring the
              serenity of the residential community is maintained, while still
              being accessible to non-residents.
            </p>
            <br />
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
            <br />
          </div>

          {/* Slider Container */}
          <div
            className="owl-carousel owl-theme customizable-carousel shadow-primary house-container commercial-cntr"
            data-loop="true"
            data-items="1"
            data-md-items="1"
            data-sm-items="1"
            data-xs-items="1"
            data-space="15"
            data-autoplay="true"
            data-autospeed="4000"
            data-nav-dots="true"
            data-nav-arrows="true"
          >
            <RoadDesign />
            <PlotLayout />
            <Prefered />
            <DevelopmentFramework />
            <ProposedLandUse />
            <PlotLayout2 />
            <InterventionExamples />
            <TypicalStreet />
            <Setbacks />
            <ProposedIntervention />
            <LayoutPlan />
            <DevelopmentFramework2 />
            <SmartTechnology />
            <AerialView />
            <CommercialBoulevard />
            <CentralNode />
            <PalmLake />
            <Retail />
            <MixedUse />
            <RetailEntertainment />
            <Cinemas />
            <Hotel />
            <CivicConvention />
            <NightClub />
            <TechHub />
            <DayHospital />
            <BankingOffices />
            <Residential />
            <Church />
            <IndoorSport />
            <School />
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
              <div className="shadow-primary p-3">
                <Gallery>
                  <Item
                    original="/img/site-map/Recreational.png"
                    thumbnail="/img/site-map/Recreational.png"
                    width="1024"
                    height="768"
                    title="Millennium Park"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src="/img/site-map/Recreational.png"
                        style={{
                          margin: "1px",
                          border: "10px solid #d0aa63",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </Item>
                </Gallery>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Utility Area */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="shadow-primary p-3">
                <Gallery>
                  <Item
                    original="/img/site-map/utility.png"
                    thumbnail="/img/site-map/utility.png"
                    width="1024"
                    height="768"
                    title="Utility Area"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src="/img/site-map/utility.png"
                        style={{
                          margin: "1px",
                          border: "10px solid #d0aa63",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </Item>
                </Gallery>
              </div>
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
              <div className="shadow-primary p-3">
                <Gallery>
                  <Item
                    original="/img/site-map/roads.png"
                    thumbnail="/img/site-map/roads.png"
                    width="1024"
                    height="768"
                    title="Roads"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src="/img/site-map/roads.png"
                        style={{
                          margin: "1px",
                          border: "10px solid #d0aa63",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </Item>
                </Gallery>
              </div>
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
              <div className="icon-text">3-Bedroom Apartments & Maisonettes.</div>
            </li>
            <li>
              <div className="icon-sm">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="icon-text">3-Bedroom Terraces & Maisonettes.</div>
            </li>
            <li>
              <div className="icon-sm">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="icon-text">4-Bedroom Detached Duplex (500sqm plot).</div>
            </li>
            <li>
              <div className="icon-sm">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="icon-text">5-Bedroom Detached Duplex (1000sqm plot).</div>
            </li>
          </ul>
          <br />
          <h6>
            The images below are the architectural designs of the buildings that
            will be made available for construction.
          </h6>
        </div>
      </div>

      {/* 3-Bedroom Apartments & Maisoneetes*/}
      <TwoBedroom />

      {/* 3-Bedroom Terraces & Maisonettes */}
      <FourBedroomTerrace />

      {/* 4-Bedroom Detached Duplex (500sqm plot) */}
      <FourBedroomDetached />

      {/* 5-Bedroom Detached Duplex */}
      <FiveBedroom />
    </Layout>
  );
};

export default Projects;
