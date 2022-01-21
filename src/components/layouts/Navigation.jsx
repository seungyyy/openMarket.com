import styled from '@emotion/styled';
import Image from 'next/image';
//import Link from 'next/link';
import logoImg from '../../../public/image/Logo-hodu.png';
import shoppingBagImg from '../../../public/image/icon-shopping-cart.svg';
import userImg from '../../../public/image/icon-user.svg';

export const Navigation = () => { 
  return (
    <header>
      <Nav>
        <ul>
          <li className="li-left">
            <Alink href="/">
              <Image src={logoImg} alt="logo" className="logo-img" />
            </Alink>
            <div className="li-inp">
              <label htmlFor="search-inp"></label>
              <input type="text" name="search-inp" placeholder="상품을 검색해보세요!" />
            </div>
          </li>
          <li className="li-link">
            <a href="/">
              <Image src={shoppingBagImg} alt="장바구니" className="shopBag-img" />
              <span className="link-txt">장바구니</span>
            </a>
            <a href="/">
              <Image src={userImg} alt="유저" className="user-img" />
              <span className="link-txt">로그인</span>
            </a>
          </li>
        </ul>
      </Nav>
    </header>
  );
}

const Nav = styled.nav`
  max-width: 1920px;
  position: relative;
  margin: 0 auto;
  padding: 1.625rem 16.92vw 0;
  margin-bottom: 1rem;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .li-left {
      display: flex;
    }
    .li-inp {
      margin-left: 1.56vw;
      input {
        width: 400px;
        height: 46px;
        border: 2px solid #21bf48;
        border-radius: 50px;
        padding: 0 13px;
        box-sizing: border-box;
        background: url('/image/icon-search.svg') no-repeat right 22px center / 28px 28px;
        &::placeholder {
          color: #767676;
        }
      }
    }
    .li-link {
      display: flex;
      a {
        display: block;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &:last-child {
          margin-left: 2.5vw;
        }
        .link-txt {
          display: block;
          margin-top: 4px;
          font-size: 12px;
          color: #767676;
          letter-spacing: -1px;
        }
      }
    }
  }
`;

const Alink = styled.a`
  display: inline-block;
  width: 124px;
`;