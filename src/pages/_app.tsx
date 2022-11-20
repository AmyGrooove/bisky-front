import { AppProps } from "next/app";
import { ReactElement } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../themes/styles.scss";
import "../themes/fonts.scss";

import "../themes/styles/Header.scss";
import "../themes/styles/Home.scss";
import "../themes/styles/Title.scss";
import "../themes/styles/LogReg.scss";
import "../themes/styles/List.scss";
import "../themes/styles/User.scss";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Header />
      <div className="container main">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
};

export default MyApp;
