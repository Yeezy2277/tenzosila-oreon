import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function WeightCircleSvg(props) {
    return (
        <Svg
            width={6}
            height={6}
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={3} cy={3} r={3} fill="#fff" />
        </Svg>
    )
}

export {WeightCircleSvg}
