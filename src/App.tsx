import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo1!
        <button>
          <TimerIcon />
        </button>
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
