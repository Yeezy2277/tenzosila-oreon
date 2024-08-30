import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ListSvg(props) {
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
                d="M2.5 7.149l1.516-1.524 6.296 6.327 6.297-6.327 1.516 1.524L10.312 15 2.5 7.149z"
                fill="#000"
                opacity={0.5}
            />
        </Svg>
    )
}

export {ListSvg}
