import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ModalCrossSvg({color, ...props}) {
    return (
        <Svg
            width={33}
            height={32}
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.33 16.028L4.284 27.076l1.414 1.414 11.048-11.048L27.793 28.49l1.414-1.414L18.16 16.028l10.86-10.86-1.415-1.413-10.86 10.859L5.887 3.754 4.47 5.17l10.86 10.859z"
                fill={color || "#fff"}
            />
        </Svg>
    )
}

export {ModalCrossSvg}
