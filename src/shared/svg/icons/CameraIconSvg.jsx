import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("screen");

function CameraIconSvg({isFocused}) {
    return (
        <Svg
            width={width * 0.06}
            height={width * 0.06}
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.54 2.76a2 2 0 012-2h14a2 2 0 012 2v14.595h.017v3.658h2.77l2.67 6h-29l2.947-6H5.55V18.76h-.01v-16zm14.017 16v2.253H18v1.1h-7v-1.1H9.551V18.76h10.005zM9.502 15.773c0 .63-.487 1.141-1.087 1.141s-1.087-.51-1.087-1.141c0-.63.487-1.141 1.087-1.141s1.087.51 1.087 1.141zm11.164 1.141c.6 0 1.087-.51 1.087-1.141 0-.63-.487-1.141-1.087-1.141s-1.086.51-1.086 1.141c0 .63.486 1.141 1.086 1.141zM7.638 3.144h13.896v7.298H7.638V3.144z"
                fill={isFocused ? "#70C5C9": "#000"}
            />
        </Svg>
    )
}

export {CameraIconSvg};
