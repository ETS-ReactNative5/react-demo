import React from 'react';

const NoState = (props) => { // 无状态组件 函数组件
  const say = (event) => alert('我是' + props.title)
  return (
    <div>
      <span className="eg" onClick={say}>
        点我（{props.title}）
      </span>
    </div>
  );
}

export default NoState;
