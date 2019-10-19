import {
  Outer,
  Label,
  Values,
  VarinatName,
  InputRadio,
  RadioWrapper
} from './SwitcherStyles';

const Switcher = ({ dimensions, selectedVariant, onDimensionValueChange }) => (
  <Outer>
    {dimensions.map(d => (
      <VarinatName key={d.id}>
        <span>{d.name}:</span>
        <Values>
          {d.values.map(value => {
            const attr = selectedVariant.attributes.find(
              a => a.attribute_key === d.name
            );
            return (
              <RadioWrapper
                key={value.id}
              >
                <InputRadio
                  type="radio"
                  id={value.id}
                  name={value.name}
                  checked={attr && attr.attribute_value === value.name}
                  onChange={() =>
                    onDimensionValueChange({
                      dimension: d,
                      value
                    })
                  }
                />
                <Label htmlFor={value.id} >
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
