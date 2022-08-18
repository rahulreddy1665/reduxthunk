import axios from 'axios';

export const loadQuote = () => {
  return async dispatch => {
    dispatch({type: 'LOAD_QUOTE_START'});
    try {
      const response = await axios.get(
        'https://breaking-bad-quotes.herokuapp.com/v1/quotes',
      );
      dispatch({type: 'LOAD_QUOTE_SUCCESS', payload: response.data[0].quote});
    } catch (error) {
      dispatch({type: 'LOAD_QUOTE_FAILURE', payload: error});
    }
  };
};
