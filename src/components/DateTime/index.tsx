import { useEffect, useState, useContext } from "react"
import { $getRoot, $getSelection, $insertNodes, TextNode } from "lexical"
import { TimeNode } from "../../editor/Nodes"
import style from "./dateTime.module.css"
import { AppContext } from "../../store/store"


export function DateTime() {
    const [time, setTime] = useState<string>()
    const ctx = useContext(AppContext)

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            const timeString = `${(date.getDay() + 1).toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds() + 1}`
            setTime(timeString)
            ctx.time = timeString
        }, 300)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const handleClick = () => {
        const editor = ctx.editor


        editor?.update(() => {
            const root = $getRoot()
            if (!time) return
            const textNode = new TimeNode(time)
            const spaceNode = new TextNode(" ")
            const selection = $getSelection()

            console.log(selection?._cachedNodes, selection)
            $insertNodes([textNode, spaceNode])
            console.log(root)
        })
    }

    return <div className={style.container}>
        <button onClick={handleClick}>⏰</button>
        {time &&
            <p className={style.time}>{time}</p>
        }
    </div>
}