import { connect } from 'react-redux';
import { availabelOptionsSelector } from "./options.selectors.js";
import { toggleOptions } from "./options.actions.js";
import Options from './Options.jsx';

const mapState = state => {
  return {
    options: availabelOptionsSelector(state)
  }
}

const mapDispatch = {
  moveOption: toggleOptions
}

export default connect(mapState, mapDispatch)(Options);