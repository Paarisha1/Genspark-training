import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { ColorAction } from '../../reducer';

type HexToHSVProps = {
  hexColor: string;
  dispatch: React.Dispatch<ColorAction>;
};

const HexToHSV = ({ hexColor, dispatch }: HexToHSVProps) => {
  const color = hex.hsv(hexColor);
  const [h, s, v] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="H"
        type="number"
        min={0}
        max={360}
        value={h}
        onChange={(e) => {
          const h = e.target.valueAsNumber;
          dispatch({
            type: 'update-hsv-color',
            payload: { hsv: [h, s, v] },
          });
        }}
      />
      <LabeledInput
        label="S"
        type="number"
        min={0}
        max={100}
        value={s}
        onChange={(e) => {
          const s = e.target.valueAsNumber;
          dispatch({
            type: 'update-hsv-color',
            payload: { hsv: [h, s, v] },
          });
        }}
      />
      <LabeledInput
        label="V"
        min={0}
        max={100}
        type="number"
        value={v}
        onChange={(e) => {
          const v = e.target.valueAsNumber;
          dispatch({
            type: 'update-hsv-color',
            payload: { hsv: [h, s, v] },
          });
        }}
      />
    </section>
  );
};

export default HexToHSV;