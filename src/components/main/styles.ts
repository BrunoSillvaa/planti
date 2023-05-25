import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  header {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .welcome {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.5px;
      }

      p {
        color: #00000090;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.5px;
      }
    }

    .search {
      display: flex;
      align-items: center;
      background: White;
      padding: 5px 20px;
      border-radius: 18px;

      input {
        border: none;
        outline: none;
        font-weight: 500;
      }

      .icon {
        font-size: 20px;
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
      gap: 20px;

      .icon {
        color: #00000080;
        font-size: 30px;
        transition: all 0.2s ease;
        cursor: pointer;

        &:active {
          scale: 0.9;
        }
      }

      .user-ft {
        width: 40px;
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
    padding: 15px 20px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 15px 10px;

    .explore {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      grid-column: 1;
      grid-row: 1;
      height: 150px;
      padding: 0 15px;
      gap: 5px;
      z-index: 1;

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
        letter-spacing: -0.4px;
      }

      p {
        color: White;
        font-weight: 400;
        font-size: 12px;
        letter-spacing: -0.4px;
      }

      .buttons-wrapper {
        display: flex;
        gap: 10px;

        button {
          color: green;
          border: 0;
          border-radius: 8px;
          padding: 5px 10px;
          font-size: 12px;
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
      gap: 10px;

      .title-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
          font-weight: 600;
        }

        p {
          display: flex;
          align-items: center;
          color: green;
          cursor: pointer;
          gap: 5px;
          font-size: 12px;
          font-weight: 500;

          .icon {
            font-size: 14px;
          }
        }
      }

      .plants-wrapper {
        display: flex;
        justify-content: space-between;

        .plant {
          background: #cccccc80;
          padding: 10px;
          border-radius: 12px;
          gap: 5px;
          display: flex;
          flex-direction: column;
          justify-content: end;
          position: relative;

          .icon {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 1;
            cursor: pointer;
          }

          h4 {
            font-size: 12px;
            font-weight: 500;
            text-align: center;
          }

          .plant-img {
            width: 100px;
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
      column-gap: 10px;

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
          }

          p {
            display: flex;
            align-items: center;
            color: green;
            cursor: pointer;
            gap: 5px;
            font-size: 10px;
            font-weight: 500;

            .icon {
              font-size: 12px;
            }
          }
        }

        .data {
          background: White;
          width: 100%;
          border-radius: 12px;
          padding: 5px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 5px;

          .users-wrapper {
            display: flex;
            gap: 5px;

            img {
              height: 20px;
              border-radius: 50%;
            }
          }

          span {
            width: 2px;
            height: 100%;
            background-color: #cccccc80;
            border-radius: 14px;
          }

          .sales {
            display: grid;
            grid-column: 1fr 1fr;
            grid-row: auto auto;

            .plants-sold {
              font-size: 12px;
              font-weight: 500;
              grid-column: 1/3;
              grid-row: 1;
              text-align: center;
            }
            .sellers {
              font-size: 10px;
              grid-column: 1;
              grid-row: 2;
            }
            .days {
              font-size: 10px;
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
          }

          p {
            display: flex;
            align-items: center;
            color: green;
            cursor: pointer;
            gap: 5px;
            font-size: 10px;
            font-weight: 500;

            .icon {
              font-size: 12px;
            }
          }
        }

        .data {
          background: White;
          width: 100%;
          border-radius: 12px;
          padding: 5px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 5px;

          .users-wrapper {
            display: flex;
            gap: 5px;

            img {
              height: 20px;
              border-radius: 50%;
            }
          }

          span {
            width: 2px;
            height: 100%;
            background-color: #cccccc80;
            border-radius: 14px;
          }

          .sales {
            display: grid;
            grid-column: 1fr 1fr;
            grid-row: auto auto;

            .plants-sold {
              font-size: 12px;
              font-weight: 500;
              grid-column: 1/3;
              grid-row: 1;
              text-align: center;
            }
            .sellers {
              font-size: 10px;
              grid-column: 1;
              grid-row: 2;
            }
            .days {
              font-size: 10px;
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
      padding: 10px 20px;
      border-radius: 18px;
      width: max-content;
      background-color: lightyellow;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        font-weight: 600;
      }

      .stats {
        display: flex;
        gap: 30px;

        .today-stat {
          display: flex;
          flex-direction: column;
          align-items: start;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.5px;

          strong {
            font-size: 10px;
            font-weight: 600;
            letter-spacing: -0.3px;
            color: green;
          }
        }

        .month-stat {
          display: flex;
          flex-direction: column;
          align-items: start;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.5px;

          strong {
            font-size: 10px;
            font-weight: 600;
            letter-spacing: -0.3px;
            color: green;
          }
        }
      }

      button {
        border: 0;
        border-radius: 8px;
        padding: 3px 9px;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: -0.3px;
        cursor: pointer;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
        }

        p {
          display: flex;
          align-items: center;
          color: green;
          cursor: pointer;
          gap: 5px;
          font-size: 10px;
          font-weight: 500;

          .icon {
            font-size: 12px;
          }
        }
      }

      .users-wrapper {
        height: 100%;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .user {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          column-gap: 10px;

          img {
            width: 30px;
            border-radius: 50%;
            grid-column: 1;
            grid-row: 1/3;
          }

          .user-name {
            grid-column: 2;
            grid-row: 1;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: -0.3px;
          }

          .order {
            grid-column: 2;
            grid-row: 2;
            font-size: 10px;
            font-weight: 500;
            letter-spacing: -0.3px;
          }

          .time {
            grid-column: 3;
            grid-row: 1;
            font-size: 10px;
            font-weight: 500;
            letter-spacing: -0.3px;
          }
        }
      }
    }
  }
`
