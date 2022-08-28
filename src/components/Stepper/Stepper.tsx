import { useCallback } from "react";
import CheckedIcon from "../../assets/checked.svg";
import { useStep } from "../../hook";
import {
  CheckedImage,
  CheckedStepperContainer,
  CircularStepperContainer,
  InnerCircularStepper,
  LineStepper,
  LineStepperInner,
  RelativeText,
  SimpleStepperContainer,
  StepperItem,
  StepperText
} from "./styles";
export type StepperConfigProps = {
  simple?: boolean;
  checkeds?: boolean;
  simpleText?: boolean;
  clickExample?: boolean;
};
export type StepperProps = {
  steps: any[];
  step: number;
} & StepperConfigProps;
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
  const { goToNext } = useStep();
  const text = String((step / steps.length) * 100) + "%";
  const getLine = (step: number) => {
    return step < steps.length - 1;
  };

  if (simpleText) {
    return (
      <CheckedStepperContainer onClick={goToNext}>
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
              {getLine(index) && (
                <LineStepper>
                  <LineStepperInner notVisible active={passed} />
                </LineStepper>
              )}
            </>
          );
        })}
      </CheckedStepperContainer>
    );
  }

  if (checkeds) {
    return (
      <CheckedStepperContainer onClick={goToNext}>
        {steps.map((_step, index) => {
          const active = step === index;
          const passed = step > index;
          const animate = step - 1 === index;
          return (
            <>
              <CircularStepperContainer>
                <InnerCircularStepper active={active}>
                  {passed ? <CheckedImage src={CheckedIcon} /> : index}
                </InnerCircularStepper>
                <StepperText active={active}>{_step.title}</StepperText>
              </CircularStepperContainer>
              {getLine(index) && (
                <LineStepper>
                  <LineStepperInner active={passed} animate={animate}/>
                </LineStepper>
              )}
            </>
          );
        })}
      </CheckedStepperContainer>
    );
  }

  return (
    <>
      <SimpleStepperContainer onClick={goToNext}>
        {simple && <SimpleItem {...{ text, step, steps }} />}
        <StepperItem step={step} steps={steps} />
      </SimpleStepperContainer>
    </>
  );
};
