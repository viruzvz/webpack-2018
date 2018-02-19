import React, { Component } from 'react';
import { render } from 'react-dom';
import Grid from 'react-virtual-css-grid';

export default class Hello extends Component {
  render() {
  	let style={height:'100vh'}
    return (
      <div>
        <Grid style={style} nItems={1000000} renderGridItem={({absolutePosition})=>{
        	return (<div key={absolutePosition}>{absolutePosition}</div>)
        }}/>

      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));