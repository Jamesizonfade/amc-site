import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {/* Header with Navigation */}
      <Header />
      {children}
      {/* Footer  */}
      <Footer />
      <a href="#" className="scroll-to-top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  );
};
