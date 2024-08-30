import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("screen");

function ServiceIconSvg({isFocused}) {
    return (
        <Svg
            width={width * 0.06}
            height={width * 0.06}
            viewBox="0 0 24 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0a8 8 0 00-8 8v9.586c0 .89 1.077 1.337 1.707.707l2.511-2.511c.294-.294.738-.37 1.13-.232.83.292 1.723.45 2.652.45h8a8 8 0 100-16H8zM7 5h11v2H7V5zm7 4H7v2h7V9z"
                fill={isFocused ? "#70C5C9": "#000"}
            />
        </Svg>
    )
}

export {ServiceIconSvg};
