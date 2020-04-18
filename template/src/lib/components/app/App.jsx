import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppPage from '../pages/AppPage';
import * as ThemeActions from '../../redux/actions/ThemeActions';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={AppPage} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
}

const combineActions = {
  ...ThemeActions,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(combineActions, dispatch);

export default connect(null, mapDispatchToProps)(App);
