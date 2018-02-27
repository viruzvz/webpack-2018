import React, { Component } from 'react';
import { render } from 'react-dom';

import '../styles/style.scss';
import '../styles/style.less';

import doctosimage from '../assets/doctors.jpg'; // Importing image -> ADDED IN THIS STEP

export default class Hello extends Component {
  render() {
    return (
      <div class='superless'>
        CARLAO !!!aa!TRETA - DA - 123456
        {/* ADDED IN THIS STEP */}
        <img src={ doctosimage } alt='Doctors Working' width='150px' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
