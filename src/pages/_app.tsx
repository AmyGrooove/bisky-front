import { AppProps } from "next/app";
import { ReactElement } from "react";
import "../themes/styles.scss";
import "../themes/fonts.scss";
import Header from "../components/Header";

import "../themes/styles/Header.scss";
import "../themes/styles/Login.scss";
import "../themes/styles/Title.scss";
import "../themes/styles/Footer.scss";
import "../themes/styles/User.scss";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
