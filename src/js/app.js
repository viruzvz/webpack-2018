import React, { Component } from 'react';
import { render } from 'react-dom';

import '../styles/style.scss';

import doctosimage from '../assets/doctors.jpg'; // Importing image -> ADDED IN THIS STEP

export default class Hello extends Component {
  render() {
    return (
      <div>
        CARLAO !!!aa!TRETA - DA - asdasdasds

        {/* ADDED IN THIS STEP */}
        <img src={ doctosimage } alt='Doctors Working' width='150px' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
