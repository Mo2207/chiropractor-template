import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* <link rel="icon" href="assets/img/favicon.ico" /> */}
        <meta
          name="description"
          content="Lash & Brow Design Studio"
        />
        <meta name="author" content="The Clicks" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" 
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/animation.css"
        />
        <link rel="stylesheet" type="text/css" href="assets/css/base.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/glitch.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/cdheadline.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/fontello.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/hamburgers.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/magnificpopup.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/owlcarousel.css"
        />
        <link rel="stylesheet" type="text/css" href="assets/css/owltheme.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/custom.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/main.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
