var HelloMessage = React.createClass({
  render: function() {
    throw new Error('My error');
    return <div>Goodbye {this.props.name}</div>;
  }
});

