import { connect } from 'react-redux';
import Main from '../components/main';
import { increment } from '../redux/actions/increment';

const mapDispatchToProps = (dispatch) => ({
  increment: (value) => dispatch(increment(value))
});

const mapStateToProps = (state) => ({ counter: state.counter });

export default connect(mapStateToProps, mapDispatchToProps)(Main);

