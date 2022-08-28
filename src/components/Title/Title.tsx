import { Container, SubTitle, Title } from "./styles";

type Props = {
  subtitle?: string;
};

export const Header = ({ subtitle }: Props) => {
  return (
    <Container>
      <Title>Progresso</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
    </Container>
  );
};
