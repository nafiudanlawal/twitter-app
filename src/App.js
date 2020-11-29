//Import Sass Files
import "./App.scss";
import PageTop from "./main_components/PageHeader";
import TweetForm from "./main_components/TweetForm";
import Header from "./left-column/Layout";


function App() {
  return (
    <div className="App">
      <><Header /> </>
      
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
