import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";


const MillenniumCourt = () =>{
    return (

        <Layout title="Millennium-Court">
         {/* Banner */}
         <Banner page="Millennium-Court" />
         <div className="section-block section-sm border-bottom partners">
          <div className="container">
              <object data="/documents/millennium-court-bronchure.pdf" type="application/pdf" width="100%" height="2100px"> <p>Oops!! Your browser doesnt support a PDFs</p> 
              <p><a href="/documents/millennium-court-bronchure.pdf" download="millennium court brochure">Download Millennium Court Brochure</a></p>
              </object>
          {/* <embed src="/documents/millennium-court-bronchure.pdf" width="100%" height="2100px" /> */}

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