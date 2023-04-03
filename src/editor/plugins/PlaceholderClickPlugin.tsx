import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export function PlaceholderClickPlugin() {
    const [editor] = useLexicalComposerContext()

    function handlePlacholderClick() {
        editor.focus()
    }


    useEffect(() => {
        const placeholder = editor.getRootElement()?.parentElement?.querySelector(".editor-placeholder")

        placeholder?.addEventListener("click", () => handlePlacholderClick())

        return placeholder?.removeEventListener("click", () => handlePlacholderClick())
    }, [editor])

    return null
}