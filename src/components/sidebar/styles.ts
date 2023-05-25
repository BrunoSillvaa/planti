import styled from 'styled-components';
import Bg from '../../assets/bg.svg'

export const Container = styled.aside`
  background: White;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 250px;
  padding: 15px 20px;
  border-radius: 18px 0px 0 18px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 0px 2.6px;

  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    .img {
      width: 25px;
    }

    .text {
      font-size: 20px;
      font-weight: 700;
      color: #73da77;
    }
  }

  .menu-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;

    .menu-title {
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: -.8px;
    }

    .itens-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      height: 100%;

      .item {
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        gap: 10px;

        &::before {
          content: '';
          display: none;
          background: lightgreen;
          position: absolute;
          height: 100%;
          width: 5px;
          margin-left: -20px;
          border-radius: 0 14px 14px 0;
          animation: toRight .2s ease;

          @keyframes toRight {
            from {
              opacity: 0;
              width: 0;
            } to {
              opacity: 1;
              width: 5px;
            }
          }
        }

        &:hover {
          &::before {
            display: block
          }

          & > .item-icon {
            color: lightgreen;
          }

          & > .item-title {
            color: lightgreen;
          }
        }

        .item-icon {
          font-size: 20px;
          color: #00000080;
          transition: all .2s ease;
        }

        .item-title {
          font-size: 16px;
          font-weight: 600;
          color: #00000080;
          transition: all .2s ease;
        }
      }
    }
  }

  .help {
    background: lightgreen;
    background: url(${Bg});
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 10px;
    border-radius: 12px;
    padding: 20px 5px 10px 5px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      background: lightgreen;
      border: 2px solid Black;
      outline: 8px solid White;
      width: 25px;
      height: 25px;
      top: -15px;
      left: 50%;
      border-radius: 50%;
      font-weight: 700;
    }

    h3 {
      font-size: 16px;
      font-weight: 700;
      letter-spacing: -.3px;
    }

    p {
      font-size: 14px;
      font-weight: 500;
      text-align: center;
    }

    button {
      background: White;
      border: none;
      padding: 10px 8px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      transition: all .3s ease;
      cursor: pointer;

      &:active {
        scale: .9;
      }
    }
  }
`