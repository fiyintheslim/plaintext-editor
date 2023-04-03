import { createContext, useState } from "react";
import { LexicalEditor } from "lexical";

type State = {
    time: string,
    editor: LexicalEditor
}

type InitState = Partial<State>

export const AppContext = createContext<InitState>({})

export function Provider({ children }: { children: React.ReactNode }) {
    const inialState = {
        time: ""
    }
    return <AppContext.Provider value={inialState}>{children}</AppContext.Provider>
}