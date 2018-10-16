import React, {Component} from 'react';
import img04 from '../../image/04.jpg';
import JSXChild from './JSXChild'
class JSX extends Component {
  // 语法：{变量} 直接输入变量值
  //      {运算符/表达式 && ? : } 可以直接运算
  //      {... 属性展开运算符} 可以将对象的一个一个展开作为JSX的属性
  //      {{对象形式的样式}}

  render() {
    const user = [
      {name: '张三', age: 22, id: 1},
      {name: '李四', age: 22, id: 2},
      {name: '王五', age: 22, id: 3}
    ]

    return (
      <div>
        <img src={img04} alt=""/>
        <h5 >列表渲染</h5>
        <div className="eg">
          {['jsx ', ' 渲染 ', ' 数组']}
          <ol>
            {user.map((item) => {
              return (
                <li key={item.id}>name: {item.name} age: {item.age}</li>
              )
            })
            }
          </ol>
        </div>

        <JSXChild/>

        <h5>JSX 注意点</h5>
        <ol>
          <li>JSX中写HTML标签首字母小写；组件首字母大写</li>
          <li>如果有多个标签，必须使用一个顶级标签包起来</li>
          <li>JSX生成的HTML元素是虚拟一个DOM,实际上是一个React对象</li>
          <li>布尔值、Null 和 Undefined 被忽略,想让类似 false、true、null 或 undefined 出现在输出中，你必须先把它转换成字符串 : String(myVariable)</li>
          <li>JavaScript 中的数字0，它们依然会被渲染。</li>
        </ol>

        <div className="eg">
          <div>false: {false}</div>
          <div>null: {null}</div>
          <div>undefined: {undefined}</div>
          <div>true: {true}</div>
          <div>{[].length && <b>前面改为布尔值才能控制元素的是否渲染</b>}</div>
          <div>{[].length === 0 && <b>前面改为布尔值才能控制元素的是否渲染</b>}</div>

          <div>false: {false || <b>ddddd</b>}</div>
          <div>null: {null || <b>ddddd</b>}</div>
          <div>undefined: {undefined || <b>ddddd</b>}</div>
          <div>true: {true && <b>ddddd</b>}</div>
        </div>

      </div>
    );
  }
}

export default JSX;
