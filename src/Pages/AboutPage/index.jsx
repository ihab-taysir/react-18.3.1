import React, { Component } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./style.css";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about">
          <h1>About</h1>
          <p>Our website is the best</p>
        </div>
      </>
    );
  }
}
