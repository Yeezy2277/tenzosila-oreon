import * as React from "react"
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg"

function LoadingCircleSvg(props) {
    return (
        <Svg
            width={80}
            height={80}
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle
                cx={40}
                cy={40}
                r={35}
                stroke="url(#paint0_angular_345_16167)"
                strokeWidth={10}
            />
            <Defs>
                <RadialGradient
                    id="paint0_angular_345_16167"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0 40 -40 0 40 40)"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export {LoadingCircleSvg}
