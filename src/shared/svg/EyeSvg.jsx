import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EyeSvg(props) {
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
                d="M3.244 9.621c1.703-1.802 4.207-2.954 7.02-2.954 2.81 0 5.315 1.152 7.018 2.954a1.03 1.03 0 010 1.424C15.579 12.848 13.075 14 10.263 14c-2.812 0-5.316-1.152-7.019-2.955a1.03 1.03 0 010-1.424zm-.969 2.34a2.364 2.364 0 010-3.255c1.954-2.069 4.809-3.373 7.988-3.373 3.18 0 6.034 1.304 7.988 3.373a2.364 2.364 0 010 3.255c-1.954 2.068-4.809 3.372-7.988 3.372-3.18 0-6.034-1.304-7.988-3.372zM12 10.333a1.667 1.667 0 11-3.333 0 1.667 1.667 0 013.333 0zm1.333 0a3 3 0 11-6 0 3 3 0 016 0z"
                fill="#000"
                opacity={0.5}
            />
        </Svg>
    )
}

export {EyeSvg}
