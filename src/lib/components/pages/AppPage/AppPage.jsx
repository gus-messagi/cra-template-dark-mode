import React from 'react';
import Page from '../../templates/Page';
import Header from '../../templates/Header';
import { connect } from 'react-redux';

function AppPage({ theme }) {

  const html = document.querySelector('html');

  const darkTheme = {
    contentBackground: '#333',
    headerBackground: '#111',
    fontColor: '#fff',
  }

  const lightTheme = {
    contentBackground: '#fff',
    headerBackground: '#f1f1f1',
    fontColor: '#333',
  }

  const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

  const changeTheme = (colors) => {
    Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]));
  }

  theme ? changeTheme(darkTheme) : changeTheme(lightTheme);

  return(
    <Page header={Header}>
      <div>
        <span>Here you can add your components.</span>
      </div>
    </Page>
  );
}

const mapStateToProps = state => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(AppPage);