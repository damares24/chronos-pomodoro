import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForn } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForn />
      </Container>
    </MainTemplate>
  );
}
