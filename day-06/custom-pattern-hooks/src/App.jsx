import ThemeSwitcher from "./components/ThemeSwitcher";
import MoviesList from "./components/MovieList";
import AuthPanel from "./components/AuthPanel";
import CopyClipboard from "./components/CopyClipboard";
import ClickOutside from "./components/ClickOutside";
import Dropdown from "./components/ClickOutside";
import LocalStorage from "./components/LocalStorage";

function App() {
  return (
    <div className="flex flex-col items-center">
      <ThemeSwitcher />
      <MoviesList />
      <AuthPanel />
      {/* <CopyClipboard /> */}
      <Dropdown />
      <LocalStorage />
    </div>
  );
}

export default App;
