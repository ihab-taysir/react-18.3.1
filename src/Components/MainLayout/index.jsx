import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default class MainLayout extends Component {
  render() {
    let { children } = this.props;
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
}
