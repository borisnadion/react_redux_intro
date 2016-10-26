import { connect } from 'react-redux';
import Number from '../components/number';
import { changeColor } from '../redux/actions/change_color';
import React from 'react';

const mapDispatchToProps = (dispatch) => ({
  changeColor: (value) => dispatch(genereateColor())
});

const mapStateToProps = (state) => ({ color: state.color });

export default connect(mapStateToProps, mapDispatchToProps)(Number);

