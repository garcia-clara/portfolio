import React from "react";

class TypeWriter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      currentIndex: 0,
      isComplete: false
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.unmounted = false;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {
    if (this.unmounted || this.state.isComplete) {
      return;
    }

    const { data: toRotate } = this.props;
    const fullText = toRotate.join(" ");
    const { currentIndex } = this.state;

    if (currentIndex < fullText.length) {
      this.setState({
        text: fullText.substring(0, currentIndex + 1),
        currentIndex: currentIndex + 1
      });

      const delta = 100 + Math.random() * 100; // Vitesse de frappe variable

      setTimeout(() => {
        this.tick();
      }, delta);
    } else {
      this.setState({ isComplete: true });
    }
  }

  render() {
    return (
      <span className="typewriter">
        {this.state.text}
        {!this.state.isComplete && <span className="cursor">|</span>}
      </span>
    );
  }
}

export default TypeWriter;
