import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForn() {
  type NewType = React.SubmitEvent<HTMLFormElement>;

  function handleCreateNewTask(event: NewType) {
    event.preventDefault();
    console.log('DEU CERTO');
  }
  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de 25min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
