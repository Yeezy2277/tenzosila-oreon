import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function ResizeSvg(props) {
    return (
        <Svg
            width={36}
            height={36}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={36} height={36} rx={16} fill="#fff" />
            <G
                clipPath="url(#clip0_345_13592)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#242424"
            >
                <Path d="M26.333 11.095l-4.146 4.181a1 1 0 11-1.42-1.408l4.166-4.201h-4.572v-2h7.972v8.072h-2v-4.644zM9.667 24.904l4.146-4.18a1 1 0 111.42 1.408l-4.167 4.201h4.573v2H7.667v-.987-7.085h2v4.643z" />
            </G>
            <Defs>
                <ClipPath id="clip0_345_13592">
                    <Path fill="#fff" transform="translate(8 8)" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export {ResizeSvg}
