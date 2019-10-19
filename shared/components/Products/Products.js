import Product from '../Product';
import { Grid } from './ProductsStyles';

const Products = ({ products = {} }) => {
  return (
    <Grid>
      {products.map(item => (
        <li key={item.id}>
          <Product data={item} />
        </li>
      ))}
    </Grid>
  )
};

export default Products;
