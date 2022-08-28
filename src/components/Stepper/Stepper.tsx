import React from "react";
import CheckedIcon from "../../assets/checked.svg";
import {
  CheckedImage,
  CheckedStepperContainer,
  CircularStepperContainer,
  InnerCircularStepper,
  LineStepper,
  RelativeText,
  SimpleStepperContainer,
  StepperItem,
  StepperText
} from "./styles";
export type StepperProps = {
  steps: any[];
  step: number;
  simple?: boolean;
  checkeds?: boolean;
  simpleText?: boolean;
};
export type SimpleItem = {
  text: string;
} & StepperProps;

export const SimpleItem = ({ text, step, steps }: SimpleItem) => {
  return <RelativeText {...{ step, steps }}>{text}</RelativeText>;
};
export const Stepper = ({
  steps,
  step,
  simple,
  checkeds,
  simpleText
}: StepperProps) => {
  const text = String((step / steps.length) * 100) + "%";
  const getLine = (step: number) => {
    return step < steps.length - 1;
  };

  if (simpleText) {
    return (
      <CheckedStepperContainer>
        {steps.map((_step, index) => {
          const active = step === index;
          const passed = step >= index;
          return (
            <>
              <CircularStepperContainer>
                <InnerCircularStepper active={passed}>
                  {index}
                </InnerCircularStepper>
              </CircularStepperContainer>
              <StepperText lateral active={active}>
                {_step.title}
              </StepperText>
              {getLine(index) && <LineStepper notVisible active={passed} />}
            </>
          );
        })}
      </CheckedStepperContainer>
    );
  }

  if (checkeds) {
    return (
      <CheckedStepperContainer>
        {steps.map((_step, index) => {
          const active = step === index;
          const passed = step > index;
          return (
            <>
              <CircularStepperContainer>
                <InnerCircularStepper active={active}>
                  {passed ? <CheckedImage src={CheckedIcon} /> : index}
                </InnerCircularStepper>
                <StepperText active={active}>{_step.title}</StepperText>
              </CircularStepperContainer>
              {getLine(index) && <LineStepper active={passed} />}
            </>
          );
        })}
      </CheckedStepperContainer>
    );
  }

  return (
    <>
      <SimpleStepperContainer>
        {simple && <SimpleItem {...{ text, step, steps }} />}
        <StepperItem step={step} steps={steps} />
      </SimpleStepperContainer>
    </>
  );
};
