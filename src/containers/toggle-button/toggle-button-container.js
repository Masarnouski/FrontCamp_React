import { connect } from 'react-redux'
import { ToggleButtonTypes, getSearchType, getSortType } from '../../actions'
import { ToggleButton } from '../../components/common/toggle-button/toggle-button'

function mapStateToProps(state, ownProps) {
    if (ownProps.name == ToggleButtonTypes.SEARCH_BY) {
        return { active: ownProps.id === state.searchBy }
    }
    if (ownProps.name == ToggleButtonTypes.SORT_BY) {
        return { active: ownProps.id === state.sortBy }
    }
    return state;
}

function mapDispatchToProps(dispatch, ownProps) {
    if (ownProps.name == ToggleButtonTypes.SEARCH_BY)
        return { onClick: () => dispatch(getSearchType(ownProps.id)) }
    if (ownProps.name == ToggleButtonTypes.SORT_BY) {
        return { onClick: () => dispatch(getSortType(ownProps.id)) }
    }
}

export const toggleButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToggleButton)