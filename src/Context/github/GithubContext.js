import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext=createContext()

const GITHUB_URL=process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN=process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider=({children})=>{
  const initialState={
    users: [],
    user: {},
    repos: [],
    loading: false
  }
  const [state,dispatch]=useReducer(githubReducer,initialState)

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING'
    })
  }
  const clearUsers=()=>{
    dispatch({
      type: 'CLEAR_USERS'
    })
  }
  return <GithubContext.Provider value={{
    ...state,
    dispatch,
    clearUsers,
  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext