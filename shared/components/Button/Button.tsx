import { ReactNode } from 'react';
import { ButtonStyle } from './ButtonStyles';

interface ButtonProps {
  price: number;
  children: ReactNode;
}

const Button = ({ price }: ButtonProps) => (
  <ButtonStyle disabled={price <= 0}>
    {price > 0
      ? <p>Add to card <span itemProp="offers" itemType="http://schema.org/Offer">{price} Kr.</span></p>
      : 'Soon'
    }
  </ButtonStyle>
);

export default Button;
