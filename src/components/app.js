import React, {Component} from 'react';

import DeckForm from '../containers/DeckForm';
import DeckList from '../containers/DeckList';

export default class App extends Component {
    render() {
		return (
			<div>
				<h1>Create Deck</h1>
				<DeckForm />
				<DeckList />
			</div>
		);
    }
}
