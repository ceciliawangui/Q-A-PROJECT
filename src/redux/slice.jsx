import { createSlice } from '@reduxjs/toolkit'

//const [useName setUserName] = setState(null)
//const [useEmail setUserEmail] = setState(null)
const initialState = {
    userName: null,
    userEmail: null
}

const userSlice = createSlice({
  name: second,
  initialState,
  reducers: {
    setActiveUser: (state, action)=>{
        state.userNAME = action.payload.userName
        state.userEmail = action.payload.userEmail
    },
    setUserLogOut: state =>{
        state.userNAME = null,
        state.userEmail = null
    }
  }
});

export const { setActiveUser, setUserLogOut} = userSlice.actions

export const selectUserName = state.user.userNAME
export const selectUserEmail = state.user.userEmail

export default Slice.reducer