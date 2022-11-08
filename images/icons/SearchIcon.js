import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export const SearchIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-search"
      viewBox="0 0 24 24">
      <Circle cx="11" cy="11" r="8"></Circle>
      <Path d="M21 21L16.65 16.65"></Path>
    </Svg>
  );
};
