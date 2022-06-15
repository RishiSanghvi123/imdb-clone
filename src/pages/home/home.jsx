import NowPlaying from "../../components/now-playing/nowplaying";
import FeaturedToday from "../../components/featured-today/featuredtoday";
import Watchlist from "../../components/what-to-watch/what-to-watch";

const Home = () => {
  return (
    <>
      <NowPlaying />
      <FeaturedToday />
      <Watchlist />
    </>
  );
};

export default Home;
