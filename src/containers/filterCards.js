import { connect } from 'react-redux'
import BodyLayout from '../components/body/body'

const mapStateToProps = (state, ownProps) => ({
  searchValue: state.searchFilter
})

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
// })

export default connect(
  mapStateToProps
)(BodyLayout)
