export default function ProfileImage({ url }: { url: string }) {
  return (
    <div
      style={{
        borderRadius: "50%",
        background:
          "linear-gradient(115deg, rgb(249, 206, 52), rgb(238, 42, 123), rgb(98, 40, 215))",
        width: "60px",
        height: "60px",
      }}
    >
      <div
        style={{
          borderRadius: "50%",
          background: `url(${url})`,
          backgroundSize: "cover",
          width: "50px",
          height: "50px",
          position: "relative",
          top: "6%",
          left: "6%",
          border: "1px solid transparent",
        }}
      ></div>
    </div>
  );
}
