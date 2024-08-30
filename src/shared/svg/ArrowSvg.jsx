import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowSvg({position, width, ...props}) {
    return (
        <Svg
            style={{transform: [{scaleX: position === "right" ? -1 : 1}]}}
            width={width}
            height={width}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.393 10.845l15.807-.07a1.2 1.2 0 01.01 2.4l-15.843.07 7.058 7.058L10.728 22l-9.08-9.081a.95.95 0 01-.027-.026l-.835-.835L10.858 1.986l1.697 1.697-7.162 7.162z"
                fill="#242424"
            />
        </Svg>
    )
}

export {ArrowSvg};
