import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

export const FilmIcon = props => {
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
      className="feather feather-film"
      viewBox="0 0 24 24"
      {...props}>
      <Rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18"></Rect>
      <Path d="M7 2L7 22"></Path>
      <Path d="M17 2L17 22"></Path>
      <Path d="M2 12L22 12"></Path>
      <Path d="M2 7L7 7"></Path>
      <Path d="M2 17L7 17"></Path>
      <Path d="M17 17L22 17"></Path>
      <Path d="M17 7L22 7"></Path>
    </Svg>
  );
};
