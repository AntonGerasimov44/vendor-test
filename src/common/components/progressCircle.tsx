import React, { useMemo } from "react";
import styled from "styled-components";

interface IProps {
  radius: number;
  stroke: number;
  progress: number;
}

const MainContainer = styled.div`
  position: relative;
`;

const NumberContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const ProgressCircle = ({ progress, radius, stroke }: IProps) => {
  const normalizedRadius = useMemo(() => radius - stroke * 2, [radius, stroke]);
  const circumference = useMemo(() => normalizedRadius * 2 * Math.PI, [
    normalizedRadius,
  ]);
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const changedFillColor = useMemo(() => {
    if (progress >= 0 && progress <= 45) {
      return "#fadcdd";
    } else if (progress > 45 && progress <= 60) {
      return "#fff3d7";
    } else {
      return "#e0efdc";
    }
  }, [progress]);
  const changedStrokeColor = useMemo(() => {
    if (progress >= 0 && progress <= 45) {
      return "#ea968e";
    } else if (progress > 45 && progress <= 60) {
      return "#ffdc80";
    } else {
      return "#6dbd6f";
    }
  }, [progress]);

  return (
    <MainContainer>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke={changedStrokeColor}
          fill={changedFillColor}
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          stroke-width={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <NumberContainer>{progress / 10}</NumberContainer>
    </MainContainer>
  );
};

export default ProgressCircle;
