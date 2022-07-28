import { connect } from 'react-redux';
import { selectedOptionsSelector } from "./options.selectors.js";
import { toggleOptions } from "./options.actions.js";
import Options from './Options.jsx';

const mapState = state => {
  return {
    options: selectedOptionsSelector(state)
  }
}

const mapDispatch = {
  moveOption: toggleOptions
}

export default connect(mapState, mapDispatch)(Options);