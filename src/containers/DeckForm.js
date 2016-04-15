import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createDeck} from '../actions/index';
import {bindActionCreators} from 'redux';

class DeckForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: ''
        };
    }

    onDescriptionChange = (e) => {
        return this.setState({ name: e.target.value });
    }

    onNameChange = (e) => {
        return this.setState({ description: e.target.value });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.createDeck({ name: this.state.name, description: this.state.description });
        this.setState({ name: '', description: '' });
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>

                    <div className="form-group">
                        <label htmlFor="deck-name">Deck Name:</label>
                        <input className="form-control" type="text" value={this.state.deckName} onChange={this.onNameChange} id="deck-name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="deck-description">Description:</label>
                        <input className="form-control" type="text" value={this.state.deckDescription} onChange={this.onDescriptionChange} id="deck-description" />
                    </div>

                    <input className="btn" type="submit" value="Create Deck" />

                </form>
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ createDeck: createDeck }, dispatch);
}

export default connect(null, mapDispatchToProps)(DeckForm);