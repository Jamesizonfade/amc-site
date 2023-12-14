import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";



const AmcTwo = () =>{
    return (

        <Layout title="AMC 2">
         {/* Banner */}
         <Banner page="AMC 2" />
         <div className="section-block section-sm border-bottom partners">
         <div className="section-block grey-bg">
        <div className="container text-center">
        
        </div>
        <div className="container text-center">
              <object data="/documents/amc-2-brochure-new.pdf" type="application/pdf" width="100%" height="950px">
              <embed src="https://drive.google.com/file/d/1m9K1MK248NT9Lo7NBLCUnRHFrjXhGhN2/preview?usp=sharing" width="100%" height="600px"/>
              </object>

          

          </div>
        </div>
        </div>

        </Layout>

    )
}

export default AmcTwo