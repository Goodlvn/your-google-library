import React, { useContext, useReducer, createContext } from "react";
import Actions from "./Actions";

const initialState = {
    searchResult: [],
    savedBooks: [],
    loading: false
};

const BookContext = createContext(initialState);

function reducer(state, { type, payload }) {
    switch (type) {
        case Actions.LOADING:
            return {
                ...state,
                loading: true
            };
        case Actions.SEARCH_RESULTS:
            return {
                ...state,
                searchResults: payload,
                loading: false,
            };
        case Actions.SAVE_BOOK:
            return {
                ...state,
                savedBooks: [...state.savedBooks, payload],
                loading: false,
            };
        case Actions.GET_SAVED_BOOKS:
            return {
                ...state,
                savedBooks: payload,
                loading: false,
            };
        case Actions.DELETE_BOOK:
            const filteredBooks = state.savedBooks.filter((book) => {
                return book.googleId !== payload;
            });

            return {
                ...state,
                savedBooks: filteredBooks,
                loading: false,
            };
        case Actions.VIEW_DETAILS:
            return {
                ...state,
                bookDetails: payload,
            };
        default:
            return state;
    }
}

const BookProvider = ({ ...props }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <BookContext.Provider value={{ state, dispatch }} {...props} />;
};

const useBookContext = () => {
    return useContext(BookContext);
};

export { useBookContext, BookProvider }