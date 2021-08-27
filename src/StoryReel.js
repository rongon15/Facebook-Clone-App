import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://deadline.com/wp-content/uploads/2021/04/Bruce-Dickinson.jpg"
        profileSrc="https://i.pinimg.com/564x/07/8c/9d/078c9d714148a3000e33236da16950bc.jpg"
        title="Bruce Dickinson"
      />

      <Story
        image="https://myglobalmind.com/wp-content/uploads/2020/11/Adrian_Smith_featureimage.jpg"
        profileSrc="https://townsquare.media/site/366/files/2016/03/Iron-Maiden-Adrian-Smith-2.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"
        title="Adrian Smith"
      />

      <Story
        image="https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDUyMDM1OTMwODkxOTEw/fender-artist-series-stratocasters-dave-murray-vs-jim-root.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/1706787307/Dave_murray.JPG"
        title="Dave Murray"
      />

      <Story
        image="https://i.ytimg.com/vi/7eczLQDjoeU/maxresdefault.jpg"
        profileSrc="https://m.media-amazon.com/images/M/MV5BMDk3Mjg0MmYtMWI1Yy00ZjkzLTkyMzAtNWJjOGI4MGQ1YmZiXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
        title="Nicko Mcbrain"
      />

      <Story
        image="https://editorial01.shutterstock.com/wm-preview-1500/2656341b/36fe1aca/iron-maiden-out-and-about-stockholm-sweden-shutterstock-editorial-2656341b.jpg"
        profileSrc="https://www.guitarmasterclass.net/wiki/images/9/94/Janick.jpg"
        title="Janick Gers"
      />
    </div>
  );
}

export default StoryReel;
