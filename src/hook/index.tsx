import React, { PropsWithChildren, useCallback } from "react";
import { StepperProps } from "../components/Stepper/Stepper";

type StepTyped = {
  [key: string]: any;
  title: string;
}
type StepperContext = {
  goTo: (step: number) => void;
  goToNext: () => void;
  goToBack: () => void;
  handleStep: (steps: any[]) => void;
} & StepperProps;
const StepContext = React.createContext<StepperContext>({
  steps: [],
  step: 0,
  goTo(step: number) {},
  goToNext() {},
  goToBack() {},
  handleStep(steps: any[]) {}
});
export const StepProvider = ({ children }: PropsWithChildren) => {
  const [step, setStep] = React.useState(0);
  const [steps, setSteps] = React.useState<StepTyped[]>([]);
  const goTo = (step: number) => {
    setStep(step);
  };
  const goToNext = useCallback(() => {
    let _step = step + 1;
    if (_step > steps.length - 1) _step = 0;
    setStep(_step);
  }, [step]);
  const goToBack = useCallback(() => {
    let _step = step - 1;
    if (_step < 0) _step = 0;
    setStep(_step);
  }, [step]);
  const handleStep = (steps: StepTyped[]) => {
    setSteps(steps);
  };
  const provider = {
    step,
    steps,
    goTo,
    goToNext,
    goToBack,
    handleStep
  };
  return (
    <StepContext.Provider value={provider}>{children}</StepContext.Provider>
  );
};
export const useStep = () => {
  const context = React.useContext(StepContext);
  return context;
};
