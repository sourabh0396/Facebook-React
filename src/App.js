import Header from './Header';
import Sidebar from './sidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
// import Post from './post';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  // const user = null;
  const [{user}, dispatch] = useStateValue();
  console.log(user);
  return (
    <>
    {
      !user ? (<Login/>) : (
        <div className="App">
        <Header/>
          <div className='app-body'>
            <Sidebar/>
            <Feed/>
            <RightSidebar/>
          </div>
      </div>
      )
    }
      
    </>
  );
}

export default App;
