import Link from "next/link";
import Fade from "react-reveal/Fade";
import Head from "next/Head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Jinny's Blog: Videos</title>
      </Head>
      <Fade left>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {children}
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <button>
            <Link href="/Watch">
              <a style={{ color: "#fff" }}>
                <font size="5">
                  <font color="black">to Page 1</font>
                </font>
              </a>
            </Link>
          </button>
          <button>
            <Link href="/Watch/FirstPage">
              <a style={{ color: "#fff" }}>
                <font size="5">
                  <font color="black">to Page 2</font>
                </font>
              </a>
            </Link>
          </button>
        </div>
      </Fade>
    </>
  );
}

export default Layout;
