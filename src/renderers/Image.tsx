import * as React from "react";
import Spinner from "../components/Spinner";
import { Renderer, Tester } from "./../interfaces";

export const renderer: Renderer = ({ story, action, config }) => {
  const [loaded, setLoaded] = React.useState(false);
  const { width, height, loader, storyStyles } = config;
  let computedStyles = {
    ...styles.storyContent,
    ...(storyStyles || {}),
  };

  const imageLoaded = () => {
    setLoaded(true);
    action("play");
  };
  return (
    <div>
      <img
        style={computedStyles as React.CSSProperties}
        src={story.url}
        onLoad={imageLoaded}
      />
      {!loaded && (
        <div
          style={{
            width: width,
            height: height,
            position: "absolute",
            left: 0,
            top: 0,
            background: "rgba(0, 0, 0, 0.9)",
            zIndex: 9,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ccc",
          }}
        >
          {loader || <Spinner />}
        </div>
      )}
    </div>
  );
};

const styles = {
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden",
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  },
};

export const tester: Tester = (story) => {
  return {
    condition: !story.content && (!story.type || story.type === "image"),
    priority: 2,
  };
};

export default {
  renderer,
  tester,
};
