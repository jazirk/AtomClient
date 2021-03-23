import * as fromData from "../actions/data.actions";
import {Books} from '@app/core/models/books-list';

export interface DataState {
    items: Books;
    loading: boolean;
    error: any;
}

export const initialState: DataState = {
    items: {
        kind: '',
        totalItems: 0,
        items: [
            {
                id: '',
                volumeInfo: {
                    title: '',
                    publisher: '',
                    publishedDate: null,
                    authors: []
                }
            }
        ]
    },
    loading: false,
    error: null
};

export function reducer(
    state = initialState,
    action: fromData.ActionsUnion
): DataState {
    switch (action.type) {
        case fromData.ActionTypes.LoadDataBegin: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }

        case fromData.ActionTypes.LoadDataSuccess: {
            return {
                ...state,
                loading: false,
                items: action.payload.data
            };
        }

        case fromData.ActionTypes.LoadDataFailure: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }

        default: {
            return state;
        }
    }
}

export const getItems = (state: DataState) => state.items;
