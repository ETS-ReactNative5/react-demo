import React from 'react'
import {addTodo} from '../actions/index'
import {connect} from 'react-redux'

// mapStateToProps 创建新对象太过频繁，可以学习如何使用 reselect 来 计算衍生数据。
let AddTodo = ({dispatch}) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input type="text" ref={node => input = node}/>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo