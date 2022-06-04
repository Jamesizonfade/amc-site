import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";


const MillenniumCourt = () =>{
    return (

        <Layout title="Millennium-Court">
         {/* Banner */}
         <Banner page="Millennium-Court" />
         <div className="section-block section-sm border-bottom partners">
          <div className="container">
          <embed src="/documents/millennium-court-bronchure.pdf" width="100%" height="2100px" />

          <div className="millenium-court-button-container text-center">

              <a href="/documents/Millennium-court-fact-sheet.pdf" download="Millenium court fact sheet"><button className="millennium-court-button">Download Price <i className="fas fa-arrow-right"> </i></button>
              </a>
          </div>

          </div>
        </div>

        </Layout>

    )
}

export default MillenniumCourt