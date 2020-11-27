//Import Sass Files
import "./App.scss";
import { ReactComponent as Logo }from "./bird.svg";
import Menu from "./left-column/menu";
import PageTop from "./main_components/PageHeader";
import TweetForm from "./main_components/TweetForm";


function App() {
  return (
    <div className="App">

      <header>
        <div id="left-menus">
          <ul className="list-group">
            <li>
              <div className="logo">
                <Logo />
              </div>
            </li>
            <li><Menu title="Home" icon="home"/></li>
            <li><Menu title="Explore" icon="hashtag"/></li>
            <li><Menu title="Notification" icon="bell"/></li>
            <li><Menu title="Messages" icon="mail"/></li>
            <li><Menu title="Bookmarks" icon="bookmark"/></li>
            <li><Menu title="Lists" icon="list"/></li>
            <li><Menu title="Profile" icon="user"/></li>
            <li><Menu title="More" icon="more-dots"/></li>
          </ul>
        </div>
      </header>
      <main>
        <div className="main">
          <PageTop />
          <TweetForm />
          <p>This is the main page</p>   
        </div>
        <div className="right-side">
          <p>This is the right Side</p>  
        </div>  
      </main>
      <div id="right-colum">

      </div>
    </div>
    
  );
}


export default App;
