import { connect } from 'react-redux'
import { setSearchFilter } from '../actions'
import { ToggleButton } from '../components/shared/toggle-button'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.searchByFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setSearchFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleButton)
