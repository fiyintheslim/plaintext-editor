import { useEffect, useContext } from "react"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"

import { AppContext } from "../../store/store"

export function DateTimePlugin() {
    const ctx = useContext(AppContext)
    const [editor] = useLexicalComposerContext()

    useEffect(() => {
        ctx.editor = editor
    }, [editor])

    return null
}