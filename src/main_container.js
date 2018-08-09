import React, { Component } from "react";
// import logo from "./logo.svg";

import { Switch, Route } from "react-router-dom";

import MainMenu from "kqilp_components/route_component/main_menu";
import AssignmentContainer from "kqilp_components/assignment/assignment.container";

const RouteAndComp = () => (
  <Switch>
    <Route exact path="/" component={MainMenu} />
    <Route path="/assignment/foodChain" component={AssignmentContainer} />
    <Route path="/assignment/backgroundInfo" component={AssignmentContainer} />
    <Route
      path="/assignment/habitatAdaptation"
      component={AssignmentContainer}
    />
    <Route path="/assignment/lifeCycle" component={AssignmentContainer} />
    <Route path="/assignment/anatomy" component={AssignmentContainer} />
    <Route path="/assignment/dissectionLab" component={AssignmentContainer} />
    <Route path="/assignment/simulation" component={AssignmentContainer} />
    <Route path="/assignment/evaluation" component={AssignmentContainer} />
    <Route path="/assignment/labNotes" component={AssignmentContainer} />
  </Switch>
);

class MainContainer extends Component {
  render() {
    return (
      <div className="App">
        <RouteAndComp />
      </div>
    );
  }
}

export default MainContainer;
