import React from 'react';
import Switch from 'react-switch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ThemeActions from '../../../redux/actions/ThemeActions';

// eslint-disable-next-line react/prop-types
function AppSwitch({ theme, changeTheme }) {
  return (
    <Switch
      checked={theme}
      onChange={() => changeTheme()}
      uncheckedIcon={false}
      checkedIcon={false}
      height={32}
      width={56}
      handleDiameter={24}
      offHandleColor="#fff"
      offColor="#333"
      onHandleColor="#333"
      onColor="#fff"
    />
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(ThemeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppSwitch);
