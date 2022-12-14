import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map(product => (
        <li key={product.id}>
          <Link to={`${product.id}`}>
            <img src="https://via.placeholder.com/200x100" alt="" />
          </Link>
          <p>{product.mame}</p>
        </li>
      ))}
    </Container>
  );
};
