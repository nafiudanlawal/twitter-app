//Import Sass Files
import "./App.scss";
import PageTop from "./main_components/PageHeader";
import TweetForm from "./main_components/TweetForm";
import Header from "./left-column/Layout";
import Tweet from "./main_components/Tweet";
import MainRightColumn from "./right-column/Container";


function App() {
  return (
    <div className="App">
      <><Header /> </>
      
      <main>
        <div className="main">
          <PageTop />
          <TweetForm />
          <section className="Feeds">
            <Tweet 
              content={`Stack Overflow be like,
                      "I can explain it to you but I can't understand it for you."`} 
              AttachedImagesProp={["/images/sample-image.jpg"]}
              sender={{handle:"@addoDgh", name:"Addo Dankwah"}}
              time="1m"
            
            />
            <Tweet />
            <Tweet 
              Content={"More football coming up this week. The players' stamina and fitness will be tested"} 
              AttachedImagesProp={["/images/post-media.jpg", "/images/post-media3.jpg", "/images/sample-image.jpg", "/images/post-media.jpg"]}
              sender={{handle:"@manutdGuy", name:"Man Utd Fan Club"}}
              time="Dec 5"
            />
            <Tweet />
            <Tweet 
              content={`I pray for peace before after and during the elections`} 
              AttachedImagesProp={["/images/sample-image.jpg"]}
              sender={{handle:"@johnDmahama", name:"John Mahama"}}
              time="15m"
            />
            <Tweet 
              Content={"Great Comeback for Man utd"} 
              AttachedImagesProp={["/images/post-media1.jpg", "/images/post-media3.jpg"]}
              sender={{handle:"@manutdGuy", name:"Man Utd Fan Club"}}
              time="Dec 5"
            />
            <Tweet />
            <Tweet 
              Content={"More football coming up this week. The players' stamina and fitness will be tested"} 
              AttachedImagesProp={["/images/post-media.jpg", "/images/post-media3.jpg"]}
              sender={{handle:"@manutdGuy", name:"Man Utd Fan Club"}}
              time="Dec 5"
            />
            <Tweet />
            <Tweet 
              Content={"More football coming up this week. The players' stamina and fitness will be tested"} 
              AttachedImagesProp={["/images/post-media.jpg", "/images/post-media3.jpg", "/images/sample-image.jpg", "/images/post-media.jpg"]}
              sender={{handle:"@manutdGuy", name:"Man Utd Fan Club"}}
              time="Dec 5"
            />
            <Tweet />
            <Tweet />
            <Tweet />
          </section>
            
        </div>
        <div className="RightSide">
          <MainRightColumn />
        </div>  
      </main>
    </div>
    
  );
}


export default App;
