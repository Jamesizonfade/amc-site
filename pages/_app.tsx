import Head from "next/head";
import useTrackPage from "../analytics"


function MyApp({ Component, pageProps }) {
  useTrackPage();
  return (
    <>
      <Head>
        
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />   
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
