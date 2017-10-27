export function deleteTask(id){
    return {
        type: 'DELETE_TASK',
        id
    }
}

export function addTask(task){
    return {
        type: 'ADD_TASK',
        task
    }
}

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
  }
export function itemsIsLoading() {
    return {
        type: 'ITEMS_IS_LOADING'
    };
}

export function itemsFetchDataSuccess(items) {
    let data = (items.tasks !== null) ? items.tasks : [];
    return {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      data
    };
}

export function saveHasFailed(bool) {
    return {
        type: 'SAVE_HAS_FAILED',
        bool
    }
}

export function getTasks(url) {
    return dispatch => {
        dispatch(itemsIsLoading());
        fetch(url)
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            dispatch(itemsIsLoading());
            return response.json();
        })
        .then(items => dispatch(itemsFetchDataSuccess(items)))
        .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function saveTasks(url, tasks){
    return dispatch => 
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tasks })
        })
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(items => {
            dispatch(itemsFetchDataSuccess(items))
            dispatch(saveHasFailed(false))
        })
        .catch(() => dispatch(saveHasFailed(true)));
}
