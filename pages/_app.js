import Link from "next/link";
import { css } from "emotion";
import { useRouter } from "next/router";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <div
        className={css`
          background-color: black;
          overflow: hidden;
        `}
      >
        <div
          className={css`
            background: url("/background.png");
            background-size: cover;
            background-position: center top;
            back-position: center top;
            height: 17rem;
            @media (max-width: 1024px) {
              height: 8rem;
            }
          `}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ul
            className={css`
              margin-left: 2rem;
              padding: 0;
              list-style: none;
              display: flex;
              align-items: flex-end;
              font-size: 2.5rem;
              height: 7rem;
              > li {
                display: flex;
                margin-left: 2rem;
                > a {
                  color: #6897bb;
                }
                &.active {
                  > a {
                    color: red;
                  }
                }
              }
            `}
          >
            <li className={router.pathname === "/" ? "active" : ""}>
              <Link href="/">
                <a>
                  <span>Home</span>
                </a>
              </Link>
            </li>
            <li className={router.pathname === "/AboutME" ? "active" : ""}>
              <Link href="/AboutME">
                <a>
                  <span>AboutME</span>
                </a>
              </Link>
            </li>
            <li className={router.pathname.includes("/Watch") ? "active" : ""}>
              <Link href="/Watch">
                <a>
                  <span>Watch</span>
                </a>
              </Link>
            </li>
            <li className={router.pathname === "/SocialMedia" ? "active" : ""}>
              <Link href="/SocialMedia">
                <a>
                  <span color="gray">SocialMedia</span>
                </a>
              </Link>
            </li>
            <li className={router.pathname === "/Pictures" ? "active" : ""}>
              <Link href="/Pictures">
                <a>
                  <span color="gray">Pictures</span>
                </a>
              </Link>
            </li>
          </ul>
          <button
            style={{
              marginTop: "1rem",
              cursor: "pointer",
              marginRight: "3rem",
            }}
            onClick={handleLogout}
          >
            {" "}
            <font size="3">Log Out</font>
          </button>
        </div>
      </div>
      <Component {...pageProps} />
    </>
  );

  function handleLogout() {
    console.log("logging out");
  }
}
