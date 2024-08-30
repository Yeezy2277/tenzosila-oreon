import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath } from "react-native-svg"

function CalendarSvg(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G opacity={0.5} clipPath="url(#clip0_485_459)">
                <Mask
                    id="a"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                >
                    <Path d="M0 0h20v20H0V0z" fill="#fff" />
                </Mask>
                <G mask="url(#a)">
                    <Mask
                        id="b"
                        style={{
                            maskType: "luminance"
                        }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                    >
                        <Path d="M0 0h20v20H0V0z" fill="#fff" />
                    </Mask>
                    <G mask="url(#b)">
                        <Path
                            d="M13.733.667V4.4M6.266.667V4.4M1.6 8.133h16.8m-1.867-5.6H3.466C2.436 2.533 1.6 3.37 1.6 4.4v13.067c0 1.03.835 1.866 1.866 1.866h13.067c1.031 0 1.867-.835 1.867-1.866V4.4c0-1.031-.836-1.867-1.867-1.867z"
                            stroke="#000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </G>
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_485_459">
                    <Path fill="#fff" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export {CalendarSvg};
