import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EditSvg(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.104 4.546l3.54 3.54-9.591 9.593-3.95.408.409-3.95 9.592-9.591zm0 1.768L3.71 14.708l-.205 1.978 1.978-.205 8.394-8.394-1.773-1.773z"
                fill="#000"
                fillOpacity={0.5}
            />
            <Path
                d="M15.186 1.285l3.72 3.72-2.232 2.232-3.72-3.72 2.232-2.232z"
                fill="#000"
                fillOpacity={0.5}
            />
        </Svg>
    )
}

export {EditSvg}
