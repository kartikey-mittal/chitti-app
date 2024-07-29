


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MeetingScreen from './main/MeetingScreen';
import Test from './main/src/Test';
import Introduction from './main/src/Introduction/Introduction';
import HomePage from './main/src/Home/HomePage';
import Login from './main/src/Login/Login';
import Questions from './main/src/Introduction/Questions';
import Playground from './main/src/Lakshay/Playground/Playground';
import { MeetingProvider } from './main/src/Lakshay/Playground/MeetingContext'

const routes = [
  { path: '/meeting', element: <MeetingScreen />,},
  { path: '/', element: <Test />,},
  { path: '/intro', element: <Introduction />,},
  { path: '/home', element: <HomePage />,},
  { path: '/login', element: <Login />,},
  { path: '/q', element: <Questions />,},
  { path: '/playground', element: <Playground/>,},

];

const App= ()=> {
  return (
    <MeetingProvider>
      <Router>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </MeetingProvider>
  );
}

export default App;