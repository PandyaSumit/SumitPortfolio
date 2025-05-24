import { createStore } from 'redux';

// Initial state
const initialState = {
  theme: localStorage.getItem('theme') || 'light'
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      return {
        ...state,
        theme: newTheme
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;