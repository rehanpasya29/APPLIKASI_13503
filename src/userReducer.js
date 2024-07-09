const initialState = {
    name: '',
    nim: '',
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return {
          ...state,
          name: action.payload,
        };
      case 'SET_NIM':
        return {
          ...state,
          nim: action.payload,
        };
      default:
        return state;
    }
  };
  