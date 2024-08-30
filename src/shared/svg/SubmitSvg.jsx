import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SubmitSvg({style,...props}) {
    return (
        <Svg
            width={100}
            height={100}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={style}
            {...props}
        >
            <Circle opacity={0.5} cx={50} cy={50} r={50} fill="#70C5C9" />
            <Circle cx={50} cy={50} r={44} fill="#70C5C9" />
            <Path transform="translate(30 30)" fill="#70C5C9" d="M0 0H40V40H0z" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M66.274 38.624c.76.703.805 1.89.102 2.65L46.49 62.76 34.874 50.21a1.875 1.875 0 112.752-2.547l8.864 9.577 17.134-18.514a1.875 1.875 0 012.65-.102z"
                fill="#fff"
            />
        </Svg>
    )
}

export {SubmitSvg}
