import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FindSvg(props) {
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
                d="M15.625 8.125a5 5 0 11-10 0 5 5 0 0110 0zm1.25 0a6.25 6.25 0 01-9.697 5.214l-4.42 4.42-.883-.884 4.33-4.33a6.25 6.25 0 1110.67-4.42z"
                fill="#000"
                opacity={0.5}
            />
        </Svg>
    )
}

export {FindSvg}
