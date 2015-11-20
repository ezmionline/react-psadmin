"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
  render: function() {
    return (
      <form>
        <h1>Manage Author</h1>
        <Input
          name="firstName"
          label="First Name:"
          value={this.props.author.firstName}
          onChnage={this.props.onChange} />

        <Input
          name="lastName"
          label="Last Name:"
          value={this.props.author.lastName}
          onChnage={this.props.onChange} />

        <input type="submit" value="Save" className="btn btn-default" />
      </form>
    );
  }
});

module.exports = AuthorForm;
