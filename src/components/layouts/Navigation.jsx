import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../../../public/image/Logo-hodu.png';
import shoppingBagImg from '../../../public/image/icon-shopping-cart.svg';
import userImg from '../../../public/image/icon-user.svg';

export const Navigation = () => { 
  return (
    <header>
      <Nav>
        <ul>
          <li className="left-li">
            <Link href="/">
              <div className="link-logo-box">
                <Image src={logoImg} alt="logo" />
              </div>
            </Link>
            <div className="li-inp">
              <label htmlFor="search-inp"></label>
              <input type="text" name="search-inp" placeholder="상품을 검색해보세요!" />
            </div>
          </li>
          <li className="right-li">
            <Link href="/cart" passHref>
              <a className="link-cart">
                <Image src={shoppingBagImg} alt="장바구니" className="shopBag-img" />
                <span className="link-txt">장바구니</span>
              </a>
            </Link>
            <Link href="/login" passHref>
              <a className="link-user">
                <Image src={userImg} alt="유저" className="user-img" />
                <span className="link-txt">로그인</span>
              </a>
            </Link>
          </li>
        </ul>
      </Nav>
    </header>
  );
}

const Nav = styled.nav`
  ul {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem 0;
    z-index: 10;
    background-color: #fff;
    .left-li {
      padding-left: 320px;
      display: flex;
      align-items: center;
      .link-logo-box {
        width: 124px;
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
    }
    .right-li {
      display: flex;
      padding-right: 320px;
      .link-cart,
      .link-user {
        padding: 0.5rem;
        outline: black;
        flex-grow: 1;
        display: inline-block;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        &:last-child {
          margin-left: 1vw;
        }
        &:focus {
          outline: 2px solid #21bf48;
          border-radius: 2px;
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
