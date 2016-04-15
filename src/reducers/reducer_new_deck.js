import {DECK_CREATED} from '../actions/index';

export default function (state=[], action) {
    switch (action.type) {
        case 'DECK_CREATED':
            return [action.payload, ...state];
    }

    return state;
}