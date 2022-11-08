import React from 'react';
import Svg, {Circle, Path, Rect} from 'react-native-svg';

const TvIcon = props => {
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
      className="feather feather-monitor"
      viewBox="0 0 24 24">
      <Rect width="20" height="14" x="2" y="3" rx="2" ry="2"></Rect>
      <Path d="M8 21L16 21"></Path>
      <Path d="M12 17L12 21"></Path>
    </Svg>
  );
};

export default TvIcon;
