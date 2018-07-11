import React,{Component} from 'react';

class TitleBar extends Component{
  render(){
    const title = this.props.title
    return(
      <h1>{title}</h1>
    )
  }
}

export default TitleBar;