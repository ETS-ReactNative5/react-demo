import React, {Component} from 'react';
import LifeCycle1 from '../component/lifeCircle/LifeCycle1'
import img05 from '../image/05.jpg'
import img06 from '../image/06.jpg'
import img07 from '../image/07.jpg'
import img08 from '../image/08.png'

class LifeCycle extends Component {
  render() {
    return (
      <div className="App">
          <img src={img05} alt=""/>
          <img src={img06} alt=""/>
          <img src={img07} alt=""/>
          <img src={img08} alt=""/>
          <LifeCycle1 ></LifeCycle1>
      </div>
    );
  }
}

export default LifeCycle;
