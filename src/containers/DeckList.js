import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class DeckList extends Component {
    renderList () {
        return this.props.decks.map((deck) => {
            return (
                <li key={deck.name}>{deck.name}</li>
            );
        });
    }

    render () {
        if (!this.props.decks) {
            return <ul>Loading...</ul>;
        }

        return (
            <section className="decks">
                <h2>Decks</h2>
                <ul>
                {this.renderList()}
                </ul>
            </section>
        );
    }
}

function mapStateToProps ({ decks }) {
    return { decks }
}

export default connect(mapStateToProps)(DeckList);