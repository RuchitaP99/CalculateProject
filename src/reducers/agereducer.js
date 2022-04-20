const intialState = {

    list: [],
  
  };
  
  const reducer = (state = intialState, action) => {
  
    switch (action.type) {
  
      case "SHOW_DATA":
  
        const { id, item } = action.payload;
  
        return {
  
          ...state,
  
          list: [
  
            ...state.list,
  
            {
  
              id: id,
  
              item: item,
  
            },
  
          ],
  
        };
  
      default:
  
        return state;
  
    }
  
  };
  
  export default reducer;