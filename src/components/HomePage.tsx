import InstagramLogo from "./../assets/Instagram.png";
import ProfileImage from "./ProfileImage";

const staticFriends = [
  { name: "Ravinder", url: "/Ravinder.jpg" },
  { name: "Tara", url: "/Tara.jpg" },
  { name: "Ankit", url: "/Ankit.jpg" },
  { name: "Deepak", url: "/Deepak.jpg" },
  { name: "Soumya", url: "/Soumya.jpg" },
];

export default function HomePage() {
  return (
    <>
      <header>
        <img height={40} src={InstagramLogo} alt="Instagram Logo" />
      </header>
      <section style={{ display: "flex", flexDirection: "row" }}>
        {staticFriends.map((f) => (
          <div style={{ margin: "1.5%", cursor: "pointer" }}>
            <ProfileImage url={f.url} />
            <p
              style={{
                color: "black",
                fontSize: "x-small",
                position: "relative",
                bottom: "5px",
              }}
            >
              {f.name}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
