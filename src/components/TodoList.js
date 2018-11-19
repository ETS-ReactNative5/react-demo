import React from 'react'
import ProTypes  from 'prop-types'
import Todo from './Todo'
const TodoList = ({onTodoClick, todos}) => (
  <ul>
    {
      todos.map(
        (item, index) => {
          return <Todo key={item.id} {...item} onClick={() => onTodoClick(item.id)}/>
        }
      )
    }
  </ul>
)
TodoList.ProTypes = {
  onTodoClick: ProTypes.func.isRequired,
  todos: ProTypes.arrayOf(
     ProTypes.shape({
       id: ProTypes.number.isRequired,
       completed: ProTypes.bool.isRequired,
       text: ProTypes.string.isRequired
     }).isRequired
  ).isRequired
}
export default TodoList