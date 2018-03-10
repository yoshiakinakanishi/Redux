// src/containers/Nav.js
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
  // state.shopping.categoriesをprops.categoriesに紐付け
  categories: state.shopping.categories
});

// react-router-reduxのpushでページ遷移を発生させる
const mapDispatchToProps = dispatch => ({
  onClick (path) {
    dispatch(push(path));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
