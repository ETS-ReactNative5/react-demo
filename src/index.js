import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
// React.createElement('h1', {}, 'hello react')

ReactDOM.render(<App/>, document.getElementById('root')); // 将React元素渲染到根DOM节点中




// function Repeat(props) {
//     let items = [];
//     for (let i = 0; i < props.numTimes; i++) {
//         items.push(props.children(i));
//     }
//     return <div>{items}</div>;
// }
//
// function ListOfTenThings() {
//     return (
//         <Repeat numTimes={10}>
//             {(index) => <div key={index}>This is item {index} in the list</div>}
//         </Repeat>
//     );
// }