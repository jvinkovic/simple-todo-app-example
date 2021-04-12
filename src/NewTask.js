import React from 'react';
import PropTypes from 'prop-types';

export default class NewTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        }
    }

    handleInputChange = (event) => {
        const currentTextInInput = event.target.value;
        this.setState({inputText: currentTextInInput});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        const trimano = this.state.inputText.trim();
        if(trimano.length < this.props.minLength) {
            return;
        }

        this.props.onAdd(trimano);
        this.setState({inputText: ''});
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputText} 
                    onChange={this.handleInputChange} />
            <input type="submit" value='Add task' />
        </form>);
    }
}

NewTask.propTypes = {
    minLength: PropTypes.number,
    onAdd: PropTypes.func
}

NewTask.defaultProps = {
    minLength: 3
}