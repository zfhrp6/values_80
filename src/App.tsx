import { useState } from 'react';
import './App.css';
import { Choice, Item } from './Choice';
import { items } from './Item';
import { Selected } from './Selected';

interface AppState {
  index: number;
  precious: Item[];
  important: Item[];
  other: Item[];
}

const nullItems = () => [
  { title: '', description: '' },
  { title: '', description: '' },
  { title: '', description: '' },
  { title: '', description: '' },
  { title: '', description: '' },
  { title: '', description: '' },
  { title: '', description: '' },
  { title: '', description: '' },
  { title: '', description: '' },
  { title: '', description: '' },
];

const App: React.FC = () => {
  const onClick = (i: number) => {
    const pr = state.precious;
    const im = state.important;
    const ot = state.other;
    switch (i) {
      case 2:
        pr.splice(0, 0, items[state.index]);
        pr.pop();
        break;
      case 1:
        im.splice(0, 0, items[state.index]);
        im.pop();
        break;
      case 0:
        ot.splice(0, 0, items[state.index]);
        ot.pop();
        break;
      default:
        break;
    }
    setState({
      precious: pr,
      important: im,
      other: ot,
      index: state.index + 1,
    });
    state.index += 1;
  };
  const [state, setState] = useState<AppState>({
    important: nullItems(),
    index: 0,
    other: nullItems(),
    precious: nullItems(),
  });

  return (
    <div>
      {state.index <= 80
        && (
        <Choice item={items[state.index]} onClick={onClick} />
        )}
      <Selected
        key={state.index}
        precious={state.precious}
        important={state.important}
        other={state.other}
      />
    </div>
  );
};

export default App;
