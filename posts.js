const {createStore, combineReducers } = require('redux')
// initial state
const initialState = {
    posts: []
}

const usersInitialState = {
    users: []
}

//action types
const ADD_POST = "ADD_POST"
const REMOVE_POST = "REMOVE_POST";

const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

//actions (action and action creator)   
//add post
const addPostAction = (post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}
//remove post
const removePostAction = (id) => {
    return {
        type: REMOVE_POST,
        id
    }
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

const removeUser = (id) => {
    return {
        type: REMOVE_USER,
        id
    }
}
// reducers
const userReducer = (state = usersInitialState, action) => {
    switch (action.type) { 
        case ADD_USER:
            return {
                users: [...state.users, action.payload]
            }
        case REMOVE_USER:
            return {
                users: state.users.filter((user) => {
                    return user.id !== action.id
                })
            }
        default: 
            return state
    }
}
const postReducer = (state = initialState, action) => {
    // if (action.type === ADD_POST) {
    //     return {
    //         posts: [...state.posts, action.payload]
    //     }
    // } else if (action.type === REMOVE_POST) {
    //     return {
    //         posts: state.posts.filter((post) => {
    //             return post.id !== action.id
    //         })
    //     }
    // } else {
    //     return state
    // }
    switch (action.type) {
        case ADD_POST:
            return {
                posts: [...state.posts, action.payload]
            }
        case REMOVE_POST: 
            return {
                posts: state.posts.filter((post) => {
                    return post.id !== action.id
                })
            }
        default:
            return state
    }
    
}

//root reduucers
const rootReducer = combineReducers({
    posts: postReducer,
    users: userReducer
})
// store
const store = createStore(rootReducer)

//subsctibe

store.subscribe(() => {
    const data = store.getState()
    console.log(data.posts)
        console.log(data.users);

})
// dispatch
//add post
store.dispatch(addPostAction({
    id: 1,
    title: "only redux"
}))
store.dispatch(
  addPostAction({
    id: 2,
    title: "mastering redux just like that",
  })
);

//remove post

store.dispatch(removePostAction(1))

//add new user

store.dispatch(addUser({
    title: "mamsh",
    id: 1
}))
store.dispatch(
  addUser({
    title: "loved",
    id: 2,
  })
);