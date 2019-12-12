import React from 'react';

const buttonStyle = {
    background: '#F65261',
    border: 'none',
    borderRadius: '3px',
    marginLeft: '1em',
    flex: '0 0 10%'
};

const inputFieldStyle = {
    backgroundColor: '#555555',
    color: 'white',
    borderRadius: '3px',
    border: 'none',
    opacity:'0.9',
    flex: '0 0 90%'
}


const Button = ({ text, onClick, style }) => (<button style={style} onClick={onClick}>
    {text}
</button>)


const InputField = ({ id, style }) => (<input style={style} id={id} />)

const SearchPanelStyles = { 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%,-50%)',
    width:'90%',
    height:'20%',
    display:'flex'
}

function addItem(e) {

    e.preventDefault();

    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");
    console.log(newItem.value)

}

const SearchPanel = () => {
    return (
            <form style={SearchPanelStyles} id="addItemForm">
                    <InputField id="addInput" style={inputFieldStyle} />
                    <Button style={buttonStyle} onClick={addItem} text="SEARCH" />
            </form>
    )
}

export default SearchPanel;
