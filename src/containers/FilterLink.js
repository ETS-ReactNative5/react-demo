import Link from '../components/Link'
import {setVisibilityFilter} from '../actions/index'
import {connect} from 'react-redux'

// mapStateToProps 创建新对象太过频繁，可以学习如何使用 reselect 来 计算衍生数据。
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTodoClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}
const FilterLink = connect(
  mapStateToProps, mapDispatchToProps
)(Link)

export default FilterLink