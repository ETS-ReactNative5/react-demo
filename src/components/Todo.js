import React from 'react'
import ProTypes  from 'prop-types'
const Todo = ({onClick, completed, text}) => (
  <li onClick={onClick} style={{textDecoration: completed ? 'line-through': 'none'}}>
    {text}
  </li>
)
Todo.prototypes = {
  onClick: ProTypes.func.isRequired,
  complete: ProTypes.bool.isRequired,
  text: ProTypes.string.isRequired
}
export default Todo