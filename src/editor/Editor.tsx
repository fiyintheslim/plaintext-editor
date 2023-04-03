import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary"
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin"
import { EditorState } from "lexical/LexicalEditorState"
import { $getRoot, $getSelection } from "lexical"

import { AutofocusPlugin } from "./plugins/AutofocusPlugin"
import { PlaceholderClickPlugin } from "./plugins/PlaceholderClickPlugin"
import { TreeViewPlugin } from "./plugins/TreeViewPlugin"
import { DateTimePlugin } from "./plugins/DateTimePlugin"
import { TimeNode } from "./Nodes"

const theme = {
    ltr: "ltr",
    placeholder: 'editor-placeholder',
}

export function Editor() {
    const config = {
        namespace: 'MyEditor',
        theme,
        onError: (error: any) => console.error(error),
        nodes: [TimeNode]
    };


    return (
        <LexicalComposer initialConfig={config}>
            <div className="editor-container">
                <div className="editor-inner">
                    <PlainTextPlugin
                        contentEditable={<ContentEditable className="editor-input" />}
                        ErrorBoundary={LexicalErrorBoundary}
                        placeholder={<span className="editor-placeholder">Some placeholder text</span>}
                    />

                    <OnChangePlugin onChange={(state) => handleChange(state)} />
                    <AutofocusPlugin />
                    <PlaceholderClickPlugin />
                    <DateTimePlugin />
                </div>
                <TreeViewPlugin />
            </div>

        </LexicalComposer>
    )
}

function handleChange(state: EditorState) {
    state.read(() => {
        const root = $getRoot()
        const selection = $getSelection()
        // console.log(selection)

    })
}