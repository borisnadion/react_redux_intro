import { connect } from 'react-redux';
import Number from '../components/number';
import { genereateColor } from '../redux/actions/generate_color';
import React from 'react';

const mapDispatchToProps = (dispatch) => ({
  changeColor: () => dispatch(genereateColor())
});

const mapStateToProps = (state) => ({ color: state.color });

export default connect(mapStateToProps, mapDispatchToProps)(Number);

