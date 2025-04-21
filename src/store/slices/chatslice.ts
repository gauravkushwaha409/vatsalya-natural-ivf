import { User } from "@/features/chatbot/interfaces/dto/loginDTO";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  messages: string[];//temporary string make this typesafe
  isLoggedIn: boolean;
  user: User | null;
  room: {id:string,name:string} | null;
  token: string | null;
}

const getinitialState = (): ChatState => {
 
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("chatbot_token");
      const user = localStorage.getItem("chatbot_user");
      const room = localStorage.getItem("chatbot_room");
      return {
        token: token ? token : null,
        user: user ? JSON.parse(user) : null,
        room: room ? JSON.parse(room) : null,
        isLoggedIn: token ? true : false,
        messages: [],
      };
    
  } else {
    return {
      token: null,
      user: null,
      room: null,
      isLoggedIn: false,
      messages: [],
    };
  }
};


const chatSlice = createSlice({
  name: "chat",
  initialState: getinitialState(),
  reducers: {
    loginTochatBot: (
      state,
      action: PayloadAction<{ token: string; user: User; room: {id:string,name:string} }>
    ) => {
      const { token, user, room } = action.payload;
      try {
        localStorage.setItem("chatbot_token", token);
        localStorage.setItem("chatbot_user", JSON.stringify(user));
        localStorage.setItem("chatbot_room", JSON.stringify(room));
        // Set the state with the received data
        state.token = token;
        state.user = user;
        state.room = room;
        state.isLoggedIn = true;
      } catch (error) {
        console.error(error)
      }
    },
  },
});

export const {loginTochatBot} = chatSlice.actions
export default chatSlice.reducer;