import Head from "next/Head";
import Image from "../components/Image";
export default function AboutMe() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Head>
        <title>Jinny's Blog: Pictures</title>
      </Head>
      <h1>
        {" "}
        Some drawings by Me, <font color="skyblue">Jinny</font>
      </h1>
      <Image src="/Gekpismash.png" />
      <h2>
        <font color="cyan">Gekpi smash</font>
      </h2>
      <Image src="/gekpistrange2.png" />
      <h3>
        <font color="green">Gekpi zap</font>
      </h3>
      <Image src="/Gekpizap.png" />
      <h4>
        <font color="purple">Gekpi strange</font>
      </h4>
      <Image src="/readyplayergekpi.png" />
      <h5>
        <font color="red">Ready Player Gekpi</font>
      </h5>
    </div>
  );
}
