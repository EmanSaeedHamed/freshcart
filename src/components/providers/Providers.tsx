'use client';
import { AppStore, createStore, PreloadedState } from "@/store/store";
import { ReactNode, useRef } from "react";
import {Provider} from "react-redux"
import {Slide , ToastContainer} from "react-toastify"

type providerProps = {
    children: ReactNode,
    preloadedState: PreloadedState,
}
export default function Providers ({children,preloadedState}:providerProps){
    const storeRef = useRef<null|AppStore>(null);
    if(!storeRef.current){
        storeRef.current = createStore(preloadedState);
    }
    return(
        <>
           <Provider store={storeRef.current}>
            {children}
            <ToastContainer
position="top-center"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Slide}
/>
           </Provider>
        </>
    )
}