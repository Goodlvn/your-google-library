import React, { useContext, useReducer } from "react";
import {
    SEARCH_RESULTS,
    VIEW_BOOK,
    LOADING,
    SAVE_BOOK,
    GET_SAVED_BOOKS,
    DELETE_BOOK,
    VIEW_DETAILS
} from "./Actions";

const initialState = {
    searchResult: [],
    savedBooks: {
        title: "",
        authors: [],
        description: "",
        image: "",
        link: "",
    },
    loading: false
};

function reducer(state, { type, payload }) {
    switch (type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case SEARCH_RESULTS:
            return {
                ...state,
                searchResults: payload,
                loading: false,
            };
        case SAVE_BOOK:
            return {
                ...state,
                savedBooks: [...state.savedBooks, payload],
                loading: false,
            };
        case GET_SAVED_BOOKS:
            return {
                ...state,
                savedBooks: payload,
                loading: false,
            };
        case DELETE_BOOK:
            return {
                ...state,
                savedBooks: filteredBooks,
                loading: false,
            };
        case VIEW_DETAILS:
            return {
                ...state,
                bookDetails: payload,
            };
        default:
            return state;
    }
}

const BookContext = ({ ...props }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <BookContext.Provider value={{ state, dispatch }} {...props} />;
};

const useBookContext = () => {
    return useContext(BookContext);
};

export { useBookContext, BookProvider }