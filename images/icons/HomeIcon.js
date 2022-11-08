import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const HomeIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-home"
      {...props}>
      <Path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></Path>
      <Path d="M9 22L9 12 15 12 15 22"></Path>
    </Svg>
  );
};
