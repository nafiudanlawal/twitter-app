//Import Sass Files
import "./App.scss";
import PageTop from "./main_components/PageHeader";
import TweetForm from "./main_components/TweetForm";
import Header from "./left-column/Layout";
import Tweet from "./main_components/Tweet";


function App() {
  return (
    <div className="App">
      <><Header /> </>
      
      <main>
        <div className="main">
          <PageTop />
          <TweetForm />
          <section className="Feeds">
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
          </section>
            
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
