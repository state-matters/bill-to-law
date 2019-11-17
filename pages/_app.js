import React, { Fragment } from "react";
import { default as NextApp } from "next/app";
import BaseStyles from "components/base-styles";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <BaseStyles />
        <Component {...pageProps} />
      </Fragment>
    );
  }
}
