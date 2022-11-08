import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const InfoIcon = props => {
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
      className="feather feather-info"
      viewBox="0 0 24 24">
      <Circle cx="12" cy="12" r="10"></Circle>
      <Path d="M12 16L12 12"></Path>
      <Path d="M12 8L12.01 8"></Path>
    </Svg>
  );
};

export default InfoIcon;
