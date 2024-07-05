import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    password: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setEmailUser: (state, action) => {
            state.email = action.payload
        },
        setPasswordUser: (state, action) => {
            state.password = action.payload
        },
        
    }
})

export const { setEmailUser, setPasswordUser } = navSlice.actions;

// selectors
export const selectEmailUser = state => state.nav.email;
export const selectPasswordUser = state => state.nav.password;

export default navSlice.reducer