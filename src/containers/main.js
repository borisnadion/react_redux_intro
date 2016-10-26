import { connect } from 'react-redux';
import Main from '../components/main';
import { increment } from '../redux/actions/increment';

const convertNumber = (number) => {
  let res = number;
  if (number % 2) {
    res += " even";
  } else {
    res += " odd";
  }
  return res;
};


const mapDispatchToProps = (dispatch) => ({
  increment: (value) => dispatch(increment(value))
});

const mapStateToProps = (state) => ({ counter: convertNumber(state.counter) });

export default connect(mapStateToProps, mapDispatchToProps)(Main);

