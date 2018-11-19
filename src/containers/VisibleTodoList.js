import TodoList from '../components/TodoList'
import {toggleTodo} from '../actions/index'
import {connect} from 'react-redux'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_All':
    default:
      return todos
  }
}
// mapStateToProps 创建新对象太过频繁，可以学习如何使用 reselect 来 计算衍生数据。
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}
const VisibleTodoList = connect(
  mapStateToProps, mapDispatchToProps
)(TodoList)

export default VisibleTodoList