import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

export function CustomSlideIn({
  children,
  direction = "left",
  duration = 1000,
  triggerOnce = true,
}) {
  return (
    <Slide direction={direction} duration={duration} triggerOnce={true}>
      {children}
    </Slide>
  );
}

export function CustomFadeCascade({
  children,
  direction = "left",
  duration = 1000,
  triggerOnce = true,
}) {
  return (
    <Fade cascade duration={duration} triggerOnce={true}>
      {children}
    </Fade>
  );
}

export const SlideParent = ({
  slideInDirection,
  slideInDuration,
  children,
}) => {
  return (
    <Fade
      cascade
      direction={slideInDirection}
      duration={slideInDuration}
      triggerOnce>
      {children}
    </Fade>
  );
};
