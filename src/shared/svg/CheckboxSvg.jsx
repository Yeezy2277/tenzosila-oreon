import * as React from "react"
import Svg, {Circle, Path} from "react-native-svg"

function CheckboxSvg({checked, ...props}) {
    return checked ? <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle
            cx={10}
            cy={10}
            r={9}
            fill="#70C5C9"
            stroke="#70C5C9"
            strokeWidth={2}
        />
        <Path
            d="M15.5 6L8 13.5l-3-3"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
        />
    </Svg> : (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={10} cy={10} r={9} stroke="#626262" strokeWidth={2}/>
        </Svg>
    )
}

export default CheckboxSvg
