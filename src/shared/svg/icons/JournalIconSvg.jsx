import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("screen");

function JournalIconSvg({isFocused, style}) {
    return (
        <Svg
            width={width * 0.06}
            height={width * 0.06}
            viewBox="0 0 28 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={style}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0h9.189a5 5 0 012.454.644L14 1.97 16.358.644A5 5 0 0118.81 0H28v21.029h-9.189a5 5 0 00-2.453.643L14 23l-2.357-1.328a5 5 0 00-2.454-.643H0V0zm11 4H4v2h7V4zM4 9h7v2H4V9zm5 5H4v2h5v-2zm8-10h7v2h-7V4zm7 5h-7v2h7V9z"
                fill={isFocused ? "#70C5C9": "#000"}
            />
        </Svg>
    )
}

export {JournalIconSvg};
