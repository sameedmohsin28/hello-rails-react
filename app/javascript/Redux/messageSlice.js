import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchGreeting = createAsyncThunk(
    'messages/fetchGreeting',
    async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/v1/greetings/index');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    }
  );

  
// reducer for greetings
const initialGreetingState = {
  greetingMessage: '',
  isLoadingGreeting: false,
}

const greetingSlice = createSlice ({
  name: 'greeting',
  initialState: initialGreetingState,
  extraReducers(builder) {
    builder
      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        isLoadingGreeting: false,
        greetingMessage: action.payload.greeting_message,
      }))
  }
})
export default greetingSlice.reducer