import React from "react";
import { Background } from "./components/Background/styles";
import { Paper } from "./components/Paper/styles";
import { Stepper } from "./components/Stepper/Stepper";
import { Header } from "./components/Title/Title";

function App() {
  const steps = [
    { title: "Compra" },
    { title: "Endereço" },
    { title: "Dados" },
    { title: "Pagamento" },
    { title: "Confirmação" }
  ];
  const step = 2;
  return (
    <Background>
      <Paper>
        <Header subtitle={steps[step].title} />
        <Stepper {...{ step, steps }} simple />
      </Paper>
      <Paper>
        <Header />
        <Stepper {...{ step, steps }} checkeds />
      </Paper>
      <Paper>
        <Header />
        <Stepper {...{ step, steps }} simpleText />
      </Paper>
    </Background>
  );
}

export default App;
