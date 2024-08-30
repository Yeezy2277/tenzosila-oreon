import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RefreshSvg(props) {
    return (
        <Svg
            width={25}
            height={29}
            viewBox="0 0 25 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.005 4.224a1 1 0 010-1.683L13.672.188a1 1 0 011.54.842v1.695a11.59 11.59 0 014.952 20.026.966.966 0 01-1.268-1.457A9.659 9.659 0 0015.212 4.72v1.014a1 1 0 01-1.54.842l-3.667-2.353zm4.137 19.854a1 1 0 010 1.684l-3.668 2.352a1 1 0 01-1.54-.841v-1.696A11.59 11.59 0 013.982 5.551.966.966 0 115.25 7.01a9.659 9.659 0 003.684 16.573v-1.015a1 1 0 011.54-.841l3.668 2.352z"
                fill="#000"
            />
        </Svg>
    )
}

export {RefreshSvg}
