import { authReducer, AuthState } from "@/features/auth/store/auth.slice";
import { cartReducer, CartState } from "@/features/cart/store/cart.slice";
import {configureStore} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
 
export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type PreloadedState = {
    auth: AuthState;
    cart: CartState;
};

export function createStore(preloadedState: PreloadedState){
    
 const store = configureStore({
    reducer: {
        // write reducres slices
        auth: authReducer,
        cart: cartReducer
    },
    preloadedState
})
  return store;
}