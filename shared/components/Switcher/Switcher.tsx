import {
  Outer,
  Label,
  Values,
  VarinatName,
  InputRadio,
  RadioWrapper
} from './SwitcherStyles';

interface SwitcherProps {
  dimensions?: object[];
  onDimensionValueChange?: any;
  selectedVariant?: any;
}

interface DimensionsProps {
  id?: number;
  name?: string;
  values?: object[];
}

interface DimensionsValuesProps {
  id?: number;
  name?: string;
  value?: any;
}

const Switcher = ({
  dimensions,
  onDimensionValueChange,
  selectedVariant,
}: SwitcherProps) => (
  <Outer>
    {!!dimensions && dimensions.map((d: DimensionsProps) => (
      <VarinatName key={d.id}>
        <span>{d.name}:</span>
        <Values>
          {d.values.map((value: DimensionsValuesProps) => {
            const attr = selectedVariant.attributes.find(
              (a: any) => a.attribute_key === d.name
            );
            return (
              <RadioWrapper
                key={value.id}
              >
                <InputRadio
                  type="radio"
                  id={value.id + value.name.replace('', '-')}
                  name={value.name}
                  checked={attr && attr.attribute_value === value.name}
                  onChange={() =>
                    onDimensionValueChange({
                      dimension: d,
                      value
                    })
                  }
                />
                <Label htmlFor={value.id + value.name.replace('', '-')}>
                  {value.name}
                </Label>
              </RadioWrapper>
            );
          })}
        </Values>
      </VarinatName>
    ))}
  </Outer>
);

export default Switcher;
