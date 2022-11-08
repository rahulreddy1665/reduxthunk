import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const QueueIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-layers"
      viewBox="0 0 24 24"
      {...props}>
      <Path d="M12 2L2 7 12 12 22 7 12 2z"></Path>
      <Path d="M2 17L12 22 22 17"></Path>
      <Path d="M2 12L12 17 22 12"></Path>
    </Svg>
  );
};

export default QueueIcon;
