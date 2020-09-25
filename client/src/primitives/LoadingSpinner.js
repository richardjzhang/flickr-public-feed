// @flow strict
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors } from 'src/styles';

export default function LoadingSpinner() {
  return (
    <svg
      css={{
        margin: 'auto',
        background: 'none',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width="150px"
      height="150px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="27" cy="50" fill={colors.scienceBlue} r="23">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="27;73;27"
          begin="-0.5s"
        ></animate>
      </circle>
      <circle cx="73" cy="50" fill={colors.rose} r="23">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="27;73;27"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="27" cy="50" fill={colors.scienceBlue} r="23">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="27;73;27"
          begin="-0.5s"
        ></animate>
        <animate
          attributeName="fill-opacity"
          values="0;0;1;1"
          calcMode="discrete"
          keyTimes="0;0.499;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        ></animate>
      </circle>
    </svg>
  );
}
