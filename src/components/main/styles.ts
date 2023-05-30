import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  header {
    width: 100%;
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 721px) {
      flex-direction: column;
      gap: 15px;
      padding: 15px;
    }

    .welcome {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 721px) {
        gap: 10px;
      }

      h2 {
        font-size: 28px;
        font-weight: 700;
        letter-spacing: -0.5px;
      }

      p {
        color: #00000090;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: -0.5px;
      }
    }

    .search {
      display: flex;
      align-items: center;
      background: White;
      padding: 8px 25px;
      border-radius: 18px;

      input {
        border: none;
        outline: none;
        font-weight: 500;
        font-size: 16px;
      }

      .icon {
        font-size: 24px;
        transition: all 0.2s ease;
        cursor: pointer;

        &:active {
          scale: 0.9;
        }
      }
    }

    .user {
      display: flex;
      align-items: center;
      gap: 30px;

      .icon {
        color: #00000080;
        font-size: 35px;
        transition: all 0.2s ease;
        cursor: pointer;

        &:active {
          scale: 0.9;
        }
      }

      .user-ft {
        width: 45px;
        border-radius: 16px;
        transition: all 0.2s ease;
        cursor: pointer;

        &:active {
          scale: 0.9;
        }
      }
    }
  }

  main {
    padding: 15px 25px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px 20px;

    @media (max-width: 721px) {
      display: flex;
      flex-direction: column;
      padding: 15px;
    }

    .explore {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      grid-column: 1;
      grid-row: 1;
      height: 200px;
      padding: 0 15px;
      gap: 10px;
      z-index: 1;

      @media (max-width: 721px) {
        height: auto;
        width: 100%;
        padding: 15px;
      }

      .video-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: -1;

        video {
          border-radius: 18px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      h3 {
        color: White;
        font-weight: 600;
        font-size: 22px;
        letter-spacing: -0.4px;
      }

      p {
        color: White;
        font-weight: 400;
        font-size: 16px;
        letter-spacing: -0.4px;
      }

      .buttons-wrapper {
        display: flex;
        gap: 30px;

        @media (max-width: 721px) {
          justify-content: center;
        }

        button {
          color: green;
          border: 0;
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.1s ease;
          cursor: pointer;

          &:active {
            scale: 99%;
          }

          &:nth-of-type(2) {
            color: White;
            background: Transparent;
            border: 2px solid White;
          }
        }
      }
    }

    .my-listings {
      display: flex;
      flex-direction: column;
      grid-column: 1;
      grid-row: 2;
      gap: 20px;

      .title-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
          font-weight: 600;
          font-size: 24px;
        }

        p {
          display: flex;
          align-items: center;
          color: green;
          cursor: pointer;
          gap: 10px;
          font-size: 16px;
          font-weight: 500;

          .icon {
            font-size: 16px;
          }
        }
      }

      .plants-wrapper {
        display: flex;
        justify-content: space-between;
        gap: 20px;

        .plant {
          background: #cccccc80;
          padding: 10px;
          border-radius: 12px;
          gap: 15px;
          display: flex;
          flex-direction: column;
          justify-content: end;
          position: relative;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 3px 6px -2px,
            rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

          .icon {
            position: absolute;
            font-size: 24px;
            top: 10px;
            right: 10px;
            z-index: 1;
            cursor: pointer;
          }

          h4 {
            font-size: 16px;
            font-weight: 500;
            text-align: center;
          }

          .plant-img {
            width: 175px;

            @media (max-width: 721px) {
              width: 110px;
            }
          }
        }
      }
    }

    .sellers {
      width: 100%;
      grid-column: 1;
      grid-row: 3;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;

      @media (max-width: 721px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .top-sellers {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .title-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;

          h3 {
            font-weight: 600;
            font-size: 24px;
          }

          p {
            display: flex;
            align-items: center;
            color: green;
            cursor: pointer;
            gap: 10px;
            font-size: 14px;
            font-weight: 500;

            .icon {
              font-size: 14px;
            }
          }
        }

        .data {
          background: White;
          width: 100%;
          border-radius: 12px;
          padding: 10px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .users-wrapper {
            display: flex;
            gap: 10px;

            img {
              height: 30px;
              border-radius: 50%;
            }
          }

          span {
            width: 4px;
            height: 100%;
            background-color: #cccccc80;
            border-radius: 14px;
          }

          .sales {
            display: grid;
            grid-column: auto auto;
            grid-row: auto auto;

            .plants-sold {
              font-size: 16px;
              font-size: 12px;
              font-weight: 500;
              grid-column: 1/3;
              grid-row: 1;
              text-align: center;
            }
            .sellers {
              font-size: 12px;
              grid-column: 1;
              grid-row: 2;
            }
            .days {
              font-size: 12px;
              grid-column: 2;
              grid-row: 2;
            }
          }
        }
      }

      .featured-sellers {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .title-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;

          h3 {
            font-weight: 600;
            font-size: 24px;
          }

          p {
            display: flex;
            align-items: center;
            color: green;
            cursor: pointer;
            gap: 10px;
            font-size: 14px;
            font-weight: 500;

            .icon {
              font-size: 14px;
            }
          }
        }

        .data {
          background: White;
          width: 100%;
          border-radius: 12px;
          padding: 10px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .users-wrapper {
            display: flex;
            gap: 10px;

            img {
              height: 30px;
              border-radius: 50%;
            }
          }

          span {
            width: 4px;
            height: 100%;
            background-color: #cccccc80;
            border-radius: 14px;
          }

          .sales {
            display: grid;
            grid-column: 1fr 1fr;
            grid-row: auto auto;

            .plants-sold {
              font-size: 16px;
              font-weight: 500;
              grid-column: 1/3;
              grid-row: 1;
              text-align: center;
            }
            .sellers {
              font-size: 12px;
              grid-column: 1;
              grid-row: 2;
            }
            .days {
              font-size: 12px;
              grid-column: 2;
              grid-row: 2;
            }
          }
        }
      }
    }

    .my-stat {
      grid-column: 2;
      grid-row: 1;
      padding: 10px 40px 10px 20px;
      border-radius: 18px;
      background: #e3f5d0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      width: fit-content;

      @media (max-width: 721px) {
        gap: 10px;
      }

      h3 {
        font-weight: 600;
        font-size: 24px;
      }

      .stats {
        display: flex;
        gap: 25px;

        .today-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.5px;

          @media (max-width: 721px) {
            font-size: 16px;
          }

          strong {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: -0.3px;
            color: green;

            @media (max-width: 721px) {
              font-size: 12px;
            }
          }
        }

        .week-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.5px;

          @media (max-width: 721px) {
            font-size: 16px;
          }

          strong {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: -0.3px;
            color: green;

            @media (max-width: 721px) {
              font-size: 12px;
            }
          }
        }

        .month-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.5px;

          @media (max-width: 721px) {
            font-size: 16px;
          }

          strong {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: -0.3px;
            color: green;

            @media (max-width: 721px) {
              font-size: 12px;
            }
          }
        }
      }

      hr {
        height: 100%;
        width: 4px;
        border: none;
        border-radius: 24px;
        background-color: #00000010;
      }

      button {
        border: 0;
        border-radius: 8px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.5px;
        cursor: pointer;
        background: transparent;
        display: flex;
        align-items: center;
        gap: 10px;
        align-self: center;
      }

      img {
        width: 140px;
        position: absolute;
        bottom: 0;
        right: -70px;
        z-index: 2;

        @media (max-width: 721px) {
          right: -80px;
        }
      }
    }

    .recent-activity {
      grid-column: 2;
      grid-row: 2/4;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .title-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
          font-weight: 600;
          font-size: 24px;
        }

        p {
          display: flex;
          align-items: center;
          color: green;
          cursor: pointer;
          gap: 5px;
          font-size: 14px;
          font-weight: 500;

          .icon {
            font-size: 14px;
          }
        }
      }

      .users-wrapper {
        height: 100%;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-content: space-between;

        @media (max-width: 721px) {
          gap: 20px;
        }

        .user {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          column-gap: 10px;

          img {
            width: 50px;
            border-radius: 50%;
            grid-column: 1;
            grid-row: 1/3;
          }

          .user-name {
            grid-column: 2;
            grid-row: 1;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: -0.3px;
          }

          .order {
            grid-column: 2;
            grid-row: 2;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: -0.3px;
          }

          .time {
            grid-column: 3;
            grid-row: 1;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: -0.3px;
          }
        }
      }
    }
  }
`
