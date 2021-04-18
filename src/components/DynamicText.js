import React, { Fragment } from "react";

const TEXT_BLOCK = ["Keshav Kumar", "Software Engineer", "Javascript Developer", "Keshav Kumar"];
const animation_iterations = 1;

class DynamicText extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }

    this.setText();
  }

  setText = () => {
    let curr_char_at = 0;
    let curr_word_at = 0;
    let iteration_count = 0;

    let timer = setInterval(() => {
      if (TEXT_BLOCK[curr_word_at].length <= curr_char_at) {
        curr_word_at++;

        if (curr_word_at >= TEXT_BLOCK.length) {
          curr_word_at = 0;
          iteration_count++;
        }
        curr_char_at = 0;
      }
      if (iteration_count >= animation_iterations) {
        clearInterval(timer);
        return;
      }
      curr_char_at++;
      this.setState({
        text: TEXT_BLOCK[curr_word_at].slice(0, curr_char_at)
      })
    }, 250);
  }

  render() {
    return (
      <div className="dynamic">
        {this.state.text}
      </div>
    )
  }
}

export default DynamicText;
