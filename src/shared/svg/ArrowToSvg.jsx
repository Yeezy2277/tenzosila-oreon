import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowToSvg(props) {
    return (
        <Svg
            width={10}
            height={17}
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.149 16.125L.625 14.609l6.327-6.296L.625 2.016 2.149.5 10 8.313l-7.851 7.812z"
                fill="#000"
                fillOpacity={0.6}
            />
        </Svg>
    )
}

export {ArrowToSvg};
