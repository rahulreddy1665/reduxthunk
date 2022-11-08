import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const PlayIcon2 = props => {
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
      className="feather feather-play"
      viewBox="0 0 24 24"
      {...props}>
      <Path d="M5 3L19 12 5 21 5 3z"></Path>
    </Svg>
  );
};

export default PlayIcon2;
