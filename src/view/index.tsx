import { Paper } from "../components/Paper/styles";
import { Stepper, StepperConfigProps } from "../components/Stepper/Stepper";
import { Header } from "../components/Title/Title";
import { useStep } from "../hook";

export const StepComponent = ({ ...config }: StepperConfigProps) => {
  const { step, steps } = useStep();
  return (
    <>
      {steps.length && (
        <Paper>
          <Header subtitle={steps[step].title} />
          <Stepper {...{ step, steps, ...config }} />
        </Paper>
      )}
    </>
  );
};
