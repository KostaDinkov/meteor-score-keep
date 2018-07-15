import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  static defaultProps = {
    title: "Default Title",
    subtitle: "Default Subtitle"
  }

  render() {
    const title = this.props.title;
    const subtitle = this.props.subtitle;
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

      </div>

    )
  }
}

export default TitleBar;