import React, { Component } from "react";

import Header from "parts/Header";
import MockPicked from "parts/MostPicked";

import landingPage from "mocks/landingPage.json";
import Hero from "parts/Hero";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}></Hero>
        <MockPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        ></MockPicked>
      </>
    );
  }
}
