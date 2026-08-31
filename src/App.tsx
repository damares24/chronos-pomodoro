import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading />
      <Heading attr={123} attr2='String'>
        Olá mundo1!
      </Heading>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quo
        amet tempore voluptate debitis fugiat nesciunt. Velit illum fugiat
        porro, accusamus doloremque, minima facere inventore iste consequatur
        quam facilis animi.
      </p>
    </>
  );
}
