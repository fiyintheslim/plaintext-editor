import { TreeView } from "@lexical/react/LexicalTreeView"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"

export function TreeViewPlugin() {
    const [editor] = useLexicalComposerContext()

    return <TreeView
        viewClassName="travel-view"
        timeTravelButtonClassName="travel-button"
        timeTravelPanelButtonClassName="travel-panel-button"
        timeTravelPanelClassName="travel-panel"
        timeTravelPanelSliderClassName="travel-panel-slider"
        editor={editor}
    />
}