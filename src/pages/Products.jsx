import { ProductList } from 'components/fortest/ProductList';
import { getProducts } from 'products';

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
