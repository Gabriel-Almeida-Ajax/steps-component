import styled from "styled-components";
import { StepperProps } from "./Stepper";

export const CheckedStepperContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`;
export const CircularStepperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    width: 70px;
    height: 70px;
    border-radius: 50%;

    background: ${props => props.theme.colors.gradient};
`;
export const InnerCircularStepper = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.5rem;
    font-weight: ${props => props.active ? 'bold' : 'lighter'};
    color: ${props => props.active ? props.theme.colors.contrast : props.theme.colors.secondaryText};

    width: 90%;
    height: 90%;
    border-radius: 50%;

    background: ${props => props.active ? 'transparent' : props.theme.colors.paper};
`;
export const StepperText = styled.div<{ lateral?: boolean, active: boolean }>`
    position: ${props => props.lateral ? '' : 'absolute'};
    top: 100%;
    font-size: 1rem;
    font-weight: ${props => props.active ? 'bold' : 'lighter'};
    color: ${props => props.active ? props.theme.colors.primaryText : props.theme.colors.secondaryText};
    text-align: center;
    margin-top: 0.5rem;
`;
export const CheckedImage = styled.img`
    width: 70%;
    height: 70%;
    filter: invert(88%) sepia(21%) saturate(935%) hue-rotate(123deg) brightness(85%) contrast(97%);
`;
export const LineStepper = styled.div<{ notVisible?: boolean, active: boolean }>`
    width: 10%;
    height: 4px;
    background: ${props => props.notVisible ? 'transparent' : props.active ? props.theme.colors.gradient : props.theme.colors.background};
`;

export const SimpleStepperContainer = styled.div`
    width: 100%;
    height: 30px;
    margin: 2rem 0;
    background: ${props => props.theme.colors.background};
    border-radius: 5px;

    position: relative;

    transition: all 0.3s ease-in-out;
`;
type Props = {
    step: number;
    steps: number[];
}
export const StepperItem = styled.div<Props>`
    position: absolute;
    border-radius: 14px;
    height: 100%;
    width: ${props => props.step / props.steps.length * 100}%;
    background: ${props => props.theme.colors.gradient};
    animation: step ${props => props.step}s linear;
    @keyframes step {
        0% {
            width: 0%;
        }
        100% {
            width: ${props => props.step / props.steps.length * 100}%;
        }
    }
    :after {
        content: "";
        position: absolute;
        top: -2.5px;
        right: -10px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: ${props => props.theme.colors.invertGradient};
    }
`;
export const RelativeText = styled.div<StepperProps>`
  position: absolute;
  top: 0;
  transform: translateY(calc(-100% - 20px)) translateX(calc(-100% + 20px));
  left: ${props => props.step / props.steps.length * 100}%;
  font-weight: 800;
  font-size: 1.2rem;
  background: -webkit-linear-gradient(${({ theme: { colors: { primary, secondary } } }) => `${primary}, ${secondary}`});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  :after {
    content: "";
    position: absolute;
    top: 26px;
    right: 25px;
    background: ${(props) => props.theme.colors.gradient};
    width: 3px;
    height: 12px;
  }
`;