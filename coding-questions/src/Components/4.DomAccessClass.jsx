export class DomAccessClass extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // Create ref
  }

  handleClick = () => {
    this.inputRef.current.focus(); // Access DOM
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    );
  }
}
