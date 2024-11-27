import { MouseEventHandler } from 'react';
import Button from '../shared/button';
import ColorChangeSwatch from '../shared/color-change-swatch';
import { ColorAction } from '../../reducer';

type SavedColorProps = {
  name: string;
  hexColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onRemove?: () => void;
  dispatch: React.Dispatch<ColorAction>;
};

const SavedColor = ({
  name,
  hexColor,
  onClick,
  onRemove,
  dispatch,
}: SavedColorProps) => {
  return (
    <article className="flex place-content-between items-center gap-2">
      <ColorChangeSwatch
        hexColor={hexColor}
        onClick={onClick}
        dispatch={dispatch}
      />
      <h3 className="whitespace-nowrap text-sm">{name}</h3>
      <Button variant="destructive" size="small" onClick={onRemove}>
        Remove
      </Button>
    </article>
  );
};

export default SavedColor;
