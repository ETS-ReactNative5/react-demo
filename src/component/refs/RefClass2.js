import React, {Component} from 'react';
import CustomTextInput from './RefDom2';

class AutoFocusTextInput2 extends Component {
  constructor(props) {
    super(props);
    this.textInput = (el) => {
      this.textInput = el
    };
  }

  componentDidMount() {
    this.textInput.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}
export default AutoFocusTextInput2
