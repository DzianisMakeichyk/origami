import styled from 'styled-components';

import { styles } from '../../ui/constant/style';

export const Outer = styled.div`
  margin: 30px 0;
`;

export const VarinatName = styled.div`
  color: ${styles.colors.grayLight};
  display: flex;
  font-size: 10px;
  font-weight: 600;
  padding: 0 0 10px;
  text-transform: uppercase;

  @media screen and (max-width: ${styles.mediaQueries.hd - 1}px) {
    justify-content: center;
  }

  span {
    min-width: 50px;
  }
`;

export const InputRadio = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  clip: rect(0 0 0 0);
  height: 1px;
  margin-bottom: 15px;
  overflow: hidden;
  position: absolute;
  width: 1px;
  
	&:checked + label {
		color: ${styles.colors.black};
  }
  
  &:focus + label {
     outline: auto 5px -webkit-focus-ring-color;
  }
`;

export const Label = styled.label`
  color: ${styles.colors.grayLight};
  cursor: pointer;
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  margin-left: 20px;
  min-width: 40px;
  text-transform: uppercase;
  user-select: none;
`;

export const Values = styled.div`
  display: flex;
`;

export const RadioWrapper = styled.div`
  position: relative;
`;
