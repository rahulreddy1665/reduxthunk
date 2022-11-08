import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export const UserIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-user"
      viewBox="0 0 24 24">
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></Path>
      <Circle cx="12" cy="7" r="4"></Circle>
    </Svg>
  );
};
