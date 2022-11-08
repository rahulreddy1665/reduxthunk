import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const LeftIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      className="feather feather-chevron-left"
      viewBox="0 0 24 24"
      {...props}>
      <Path d="M15 18L9 12 15 6"></Path>
    </Svg>
  );
};

export default LeftIcon;
