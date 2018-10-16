import React, {Component} from 'react';
import ThemeApp from '../component/stateManager/theme-app';
import img09 from '../image/09.jpg';
import img10 from '../image/10.jpg';
import img11 from '../image/11.jpg';

class Home extends Component {

    render() {
        return (
            <div><h4> context </h4>
                <p>Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。</p>
                <p> Context 提供了一种在组件之间共享此类值的方式，而不必通过组件树的每个层级显式地传递 props 。</p>
                <img src={img09} alt=""/>
                <img src={img10} alt=""/>
                <img src={img11} alt=""/>
                <ThemeApp></ThemeApp>
            </div>
        );
    }
}

export default Home;
