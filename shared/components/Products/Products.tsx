import Product from '../Product';
import { Grid } from './ProductsStyles';

interface ProductsProps {
  products?: object[];
}

const Products = ({ products }: ProductsProps) => (
  <Grid>
    {products.map((item: any) => (
      <li key={item.id}>
        <Product data={item} />
      </li>
    ))}
  </Grid>
);

export default Products;
