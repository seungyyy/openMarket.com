import styled from '@emotion/styled';


export const Footer = () => { 
  return (
    <>
      <Bottom>
        <FooterUlTop>
          <ul className="companyInfo">
            <li>
              <a href="#">호두샵 소개</a>
            </li>
            <li>
              <a href="#">이용약관</a>
            </li>
            <li>
              <a href="#">
                <strong>개인정보처리방침</strong>
              </a>
            </li>
            <li>
              <a href="#">전자금융거래약관</a>
            </li>
            <li>
              <a href="#">청소년보호정책</a>
            </li>
            <li>
              <a href="#" className="lastli">
                제휴문의
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="instaLink"></a>
            </li>
            <li>
              <a href="#" className="fbLink"></a>
            </li>
            <li>
              <a href="#" className="ytLink"></a>
            </li>
          </ul>
        </FooterUlTop>
        <hr />
        <dl>
          <dt className="hidden">주식회사</dt>
          <dd>
            <strong>(주)HODU SHOP</strong>
          </dd>
          <dt className="hidden">주소</dt>
          <dd> 제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</dd>
          <dt className="dt-float-left">사업자번호 :</dt>
          <dd className="dd-float-left"> 000-0000-0000 &#124;</dd>
          <dt className="hidden">업종</dt>
          <dd>&nbsp;통신판매업 </dd>
          <dt className="dt-float-left">대표 : </dt>
          <dd>김호두</dd>
        </dl>
      </Bottom>
    </>
  );
}

const Bottom = styled.footer`
  max-width: 1920px;
  padding: 5.55vh 16.66vw 5.8vh;
  background-color: #f2f2f2;
  font-size: 14px;
  hr {
    margin: 1.875rem 0;
    background-color: #c4c4c4;
  }
  dl {
    color: #767676;
    line-height: 24px;
    .dt-float-left,
    .dd-float-left {
      float: left;
    }
    .dd-float-left {
      &::after {
        display: inline-block;
        content: '';
      }
    }
    dd strong {
      font-weight: 500;
    }
  }
`;

const FooterUlTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    .instaLink,
    .fbLink,
    .ytLink {
      display: inline-block;
      width: 32px;
      height: 32px;
    }
    .instaLink {
      background: url('/image/icon-insta.svg') no-repeat center / 32px 32px;
    }
    .fbLink {
      margin: 0 14px;
      background: url('/image/icon-fb.svg') no-repeat center / 32px 32px;
    }
    .ytLink {
      background: url('/image/icon-yt.svg') no-repeat center / 32px 32px;
    }
  }
  .companyInfo li a:not(.lastli) {
    margin-right: 14px;
    padding-right: 14px;
    background: url('/image/bg-black-line.png') no-repeat right center / 2px 14px;
  }
`;