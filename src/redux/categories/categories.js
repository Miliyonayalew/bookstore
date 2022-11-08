const STATUS_CHECKED = 'STATUS_CHECKED';

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under Construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: STATUS_CHECKED });

export default categoriesReducer;
