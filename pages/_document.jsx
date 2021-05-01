import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* favicons Icons */}
          <link rel="shortcut icon" href="/img/logos/logo-shortcut.png" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/css/themify-icons.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/css/fontawesome-all.css"
          />
          <link rel="stylesheet" type="text/css" href="/css/icomoon.css" />
          <link rel="stylesheet" type="text/css" href="/css/plugins.css" />
          <link rel="stylesheet" href="/css/animate.css" />
          <link rel="stylesheet" href="/css/owl.carousel.css" />
          <link rel="stylesheet" href="/css/rev-settings.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/css/styles-2.css"
            id="main_styles"
          />
          <link rel="stylesheet" href="/css/app.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="/js/jquery.min.js"></script>
          <script src="/js/plugins.js"></script>
          <script src="/js/navigation.js"></script>
          <script src="/js/navigation.fixed.js"></script>
          <script src="/js/map.js"></script>
          <script src="/js/rev-slider/jquery.themepunch.tools.min.js"></script>
          <script src="/js/rev-slider/jquery.themepunch.revolution.min.js"></script>
          <script src="/js/rev-slider/revolution.extension.actions.min.js"></script>
          <script src="/js/rev-slider/revolution.extension.carousel.min.js"></script>
          <script src="/js/rev-slider/revolution.extension.kenburn.min.js"></script>
          <script src="/js/rev-slider/revolution.extension.layeranimation.min.js"></script>
          <script src="/js/rev-slider/revolution.extension.migration.min.js"></script>
          <script src="/js/rev-slider/revolution.extension.parallax.min.js"></script>
          <script src="/js/rev-slider/revolution.extension.navigation.min.js"></script>
          <script src="/js/rev-slider/revolution.extension.slideanims.min.js"></script>
          <script src="/js/rev-slider/revolution.extension.video.min.js"></script>
          <script async src="/js/main.js"></script>
        </body>
      </Html>
    );
  }
}
