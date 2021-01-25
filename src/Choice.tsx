import { FC } from 'react';

export interface ChoiceProps {
    item: Item;
    onClick: (idx: number) => void;
}

export interface Item {
    title: string;
    description: string;
}

export const Choice: FC<ChoiceProps> = ({ item, onClick }): JSX.Element => {
  if (item === undefined) {
    return (<h1>game is over.</h1>);
  }
  return (
    <div className="Choice">
      <h2>{item.title}</h2>
      {item.description}
      <br />
      <button onClick={() => onClick(2)}>precious</button>
      <button onClick={() => onClick(1)}>important</button>
      <button onClick={() => onClick(0)}>other</button>
    </div>
  );
};
