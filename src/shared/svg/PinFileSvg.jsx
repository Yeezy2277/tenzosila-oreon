import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PinFileSvg(props) {
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
                d="M4.323 6.953a.625.625 0 010-.884L7.09 3.302a5.92 5.92 0 118.371 8.37l-5.86 5.86a4.078 4.078 0 11-5.766-5.767l5.371-5.37a2.466 2.466 0 113.488 3.487l-4.883 4.883a.625.625 0 11-.884-.884l4.883-4.883a1.216 1.216 0 10-1.72-1.72L4.719 12.65a2.828 2.828 0 003.999 4l5.86-5.86a4.67 4.67 0 00-6.604-6.603L5.207 6.953a.625.625 0 01-.884 0z"
                fill="#000"
            />
        </Svg>
    )
}

export {PinFileSvg}
