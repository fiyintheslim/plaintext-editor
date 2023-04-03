import { EditorConfig, NodeKey, TextNode, SerializedTextNode } from "lexical";

export type SerializedTimeNode = SerializedTextNode

export class TimeNode extends TextNode {
    
    constructor(text: string, key?:NodeKey){
        super(text, key)
       this.__style = "color: blue"
    }

    static clone (node: TimeNode): TimeNode {
        return new TimeNode(node.__text)
    }

    static getType (): string {
        return "time-node"
    }

    static importJSON(serializedNode: SerializedTextNode): TimeNode {
        const node = $createTimeNode(serializedNode.text)
        node.setFormat(serializedNode.format)
        node.setDetail(serializedNode.detail)
        node.setMode(serializedNode.mode)
        node.setStyle(serializedNode.style)

        return node
    }

    createDom (config: EditorConfig): HTMLElement {
        const element = super.createDOM(config)
        element.style.color = this.getLatest().color
        return element
    }

    exportJSON (): SerializedTimeNode {
        return super.exportJSON()
    }


}

export function $createTimeNode(text:string) {
    return new TimeNode(text)
}