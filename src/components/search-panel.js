import React, { Component } from 'react';
import './search-panel.css';


class SearchPanel extends Component {

    addItem(e) {
        // Prevent button click from submitting form
        e.preventDefault();

        // Create variables for our list, the item to add, and our form
        const newItem = document.getElementById("addInput");
        const form = document.getElementById("addItemForm");
        console.log(newItem.value)
        // If our input has a value
        if (newItem.value != "") {
            newItem.classList.remove("is-danger");
            form.reset();
        } else {
            // If the input doesn't have a value, make the border red since it's required
            newItem.classList.add("is-danger");
        }
    }
    render() {
        return (
            <div className="SearchPanel">
                <form className="form" id="addItemForm">
                    <input
                        type="text"
                        className="SearchPanel-form"
                        id="addInput"
                    />
                    <button className="SearchPanel-button" onClick={this.addItem}>
                        SEARCH
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchPanel;
