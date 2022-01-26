import styled from '@emotion/styled/';
import Link from 'next/link';

export const ProdItemCard = ({
  image,
  price,
  seller_name,
  product_id,
  product_name,
}) => {

  return (
    <Link
      href='/products' as={`/product/${product_id}`}
    >
      <Container>
        <img src={image} alt={product_name + '의 이미지'} className="prod-img" />
        <span>우당탕탕 라이캣의 실험실</span>
        <p className="prod-name">{product_name}</p>
        <p className="price">
          <strong>{price}</strong>원
        </p>
      </Container>
    </Link>
  );
};


const Container = styled.li`
  .prod-img {
    width: 380px;
    height: 380px;
    margin-bottom: 1rem;
    object-fit: cover;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    cursor: pointer;
  }
  span {
    font-size: 16px;
    color: #767676;
  }
  .prod-name {
    font-size: 18px;
    color: #222;
  }
  .price {
    font-size: 16px;
    strong {
      margin-right: 2px;
      font-weight: bold;
      font-size: 24px;
      color: #222;
    }
  }
`;
