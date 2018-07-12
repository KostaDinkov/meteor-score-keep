import React, { Component, Fragment} from 'react';
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
      <Fragment>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </Fragment>

    )
  }
}

export default TitleBar;