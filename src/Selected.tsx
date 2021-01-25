import { Item } from './Item';

interface SelectedProps {
  precious: Item[];
  important: Item[];
  other: Item[];
}

export const Selected: React.FC<SelectedProps> = ({ precious, important, other }) => (
  <div>
    <div style={{ border: 'solid 1px' }}>
      {precious.map((i) => (
        <dl key={`${i.toString()}precious`}>
          <dt>{i.title}</dt>
          <br />
          <dd>{i.description}</dd>
        </dl>
      ))}
    </div>
    <div style={{ border: 'solid 1px' }}>
      {important.map((i) => (
        <dl key={`${i.toString()}important`}>
          <dt>{i.title}</dt>
          <br />
          <dd>{i.description}</dd>
        </dl>
      ))}
    </div>
    <div style={{ border: 'solid 1px' }}>
      {other.map((i) => (
        <dl key={`${i.toString()}other`}>
          <dt>{i.title}</dt>
          <br />
          <dd>{i.description}</dd>
        </dl>
      ))}
    </div>
  </div>
);
