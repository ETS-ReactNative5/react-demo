import React from 'react'
import ProTypes  from 'prop-types'

const Link = ({onTodoClick, active, children}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href="" onClick={e => {
      e.preventDefault()
      onTodoClick()
    }}>{children}{active}</a>
  )
}
Link.prototypes = {
  active: ProTypes.bool.isRequired,
  onTodoClick: ProTypes.func.isRequired,
  children: ProTypes.node.isRequired
}
export default Link