import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";



const MillenniumCourt = () =>{
    return (

        <Layout title="Millennium Court">
         {/* Banner */}
         <Banner page="Millennium Court" />
         <div className="section-block section-sm border-bottom partners">
         <div className="section-block grey-bg">
        <div className="container text-center">
        <div className="milleniumcourt-video"> 
        <iframe width="871" height="490" src="https://www.youtube.com/embed/GqjHBhW4NYw" 
        title="YouTube video player"  allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>   
         </div>
         <h3 className="semi-bold" >Units are selling fast!</h3>
        
        </div>
        </div>
          <div className="container text-center">
              <object data="/documents/millennium-court-bronchure.pdf" type="application/pdf" width="100%" height="2100px">
              <embed src="https://drive.google.com/file/d/1m9K1MK248NT9Lo7NBLCUnRHFrjXhGhN2/preview?usp=sharing" width="100%" height="600px"/>
              </object>

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