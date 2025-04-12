const initialState = {
    name: ''
  };
  
export  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  