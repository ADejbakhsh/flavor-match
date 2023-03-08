import React from "react"
import { useSpring, animated } from "@react-spring/web"
import { useDrag } from "@use-gesture/react"
import "../../css/Animation.css"

interface swipe_mail_t {
    title: string,
    // img: string,
    // right_option: string,
    // left_option?: string,
    // right_icon: string,
    // left_icon?: string,
    // right_action: () => void,
    // left_action?: () => void,
}


function Swipe_mail(info: swipe_mail_t) {
    // a rectangular div that can be dragged left or right, it show option to {var1} or {var2} with respective icone and img
    // when dragged left or right, it triggers the respective action
    // when dragged back to center, it goes back to initial position


    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

    // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(({ down, movement: [mx], offset:[xo,yo] }) => {
        api.start({ x: down ? mx : xo, y: 0, immediate: down  })
    })


    return (
        <div className="mail-container">
            {/* background img for animated.div = info.img */}
            <animated.div className="animation-block test"{...bind()} style={{ x, y}}>{info.title}</animated.div>
        </div>
    )

}

export default Swipe_mail