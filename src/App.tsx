import { PropsWithChildren, useEffect, useState } from "react";
import { Background } from "./components/Background/styles";
import { StepProvider, useStep } from "./hook";
import { StepComponent } from "./view";

const YourApp = ({ children }: PropsWithChildren) => {
  const { handleStep, goTo, steps: _steps } = useStep();

  const steps = [
    { title: "Compra" },
    { title: "Endereço" },
    { title: "Dados" },
    { title: "Pagamento" },
    { title: "Confirmação" }
  ];
  const step = 2;

  useEffect(() => {
    if (_steps.length) return;
    handleStep(steps);
    goTo(step);
  });
  return <p>Your App</p>;
};

function App() {
  return (
    <StepProvider>
      <Background>
        <YourApp />
        <StepComponent simple />
        <StepComponent checkeds clickExample />
        <StepComponent simpleText />
      </Background>
    </StepProvider>
  );
}

export default App;
