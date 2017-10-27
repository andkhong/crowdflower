const initialData = {
    isLoading: true,
    hasErrored: false,
    saveStatus: false,
    getURL: 'http://cfassignment.herokuapp.com/andykhong/tasks',
    postURL: 'http://cfassignment.herokuapp.com/andykhong/tasks',
    tasks: []
  };
  
  export function appReducer(state = initialData, action) {
    switch (action.type) {
      case 'ITEMS_HAS_ERRORED':
        return Object.assign({}, state, {
          hasErrored: action.hasErrored
        });
      case 'ITEMS_IS_LOADING':
        return Object.assign({}, state, {
          isLoading: true
        });
      case 'ITEMS_FETCH_DATA_SUCCESS':
        return Object.assign({}, state, {
          tasks: action.data,
          isLoading: false
        });
      case 'ADD_TASK':
        return Object.assign({}, state, {
          tasks: [...state.tasks, action.task]
        });
      case 'DELETE_TASK':
        return Object.assign({}, state, {
          tasks: [
            ...state.tasks.slice(0, action.id),
            ...state.tasks.slice(action.id + 1)
          ]
        });
      case 'SAVE_HAS_FAILED':
        return Object.assign({}, state, {
          saveStatus: action.bool
        });
      default:
        return state;
    }
  }