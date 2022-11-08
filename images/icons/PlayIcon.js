import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const PlayIcon = props => {
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
      className="feather feather-play-circle"
      viewBox="0 0 24 24"
      {...props}>
      <Circle cx="12" cy="12" r="10"></Circle>
      <Path d="M10 8L16 12 10 16 10 8z"></Path>
    </Svg>
  );
};

export default PlayIcon;
