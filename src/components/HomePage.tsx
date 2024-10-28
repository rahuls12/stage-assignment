import { useState } from "preact/hooks";
import InstagramLogo from "./../assets/Instagram.png";
import ProfileImage from "./ProfileImage";
import StoriesMount from "./StoriesMount";
import { staticFriends } from "../data";

export default function HomePage() {
  const [storyRunning, setStoryRunning] = useState(false);
  const [stories, setStories] = useState<Object[]>([]);
  const handleOnClick = (stories: Object[]) => {
    setStories(stories);
    setStoryRunning(true);
  };

  if (storyRunning) {
    return (
      <>
        <StoriesMount
          stories={stories}
          onAllStoriesEnd={() => {
            setStoryRunning(false);
          }}
        />
      </>
    );
  }

  return (
    <>
      <header>
        <img height={40} src={InstagramLogo} alt="Instagram Logo" />
      </header>
      <section style={{ display: "flex", flexDirection: "row" }}>
        {staticFriends.map((f) => (
          <div
            style={{ margin: "1.5%", cursor: "pointer" }}
            onClick={() => {
              handleOnClick(f.stories);
            }}
          >
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
