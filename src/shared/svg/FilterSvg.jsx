import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FilterSvg(props) {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7.987 13.853a3.723 3.723 0 003.72-3.727A3.723 3.723 0 007.987 6.4a3.723 3.723 0 00-3.72 3.726 3.723 3.723 0 003.72 3.727z"
                stroke="#000"
                strokeWidth={1.99999}
            />
            <Path
                stroke="#000"
                strokeWidth={2}
                d="M11.7333 10.7334L26.6667 10.7334"
            />
            <Path
                d="M22.946 24.52a3.723 3.723 0 01-3.72-3.727 3.723 3.723 0 013.72-3.726 3.723 3.723 0 013.72 3.726 3.723 3.723 0 01-3.72 3.727z"
                stroke="#000"
                strokeWidth={1.99999}
            />
            <Path
                transform="matrix(-1 0 0 1 19.2 22.4)"
                stroke="#000"
                strokeWidth={2}
                d="M0 -1L14.9333 -1"
            />
        </Svg>
    )
}

export {FilterSvg}
