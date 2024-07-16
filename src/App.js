


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MeetingScreen from './main/MeetingScreen';
import Test from './main/src/Test';
import Introduction from './main/src/Introduction/Introduction';

const routes = [
  { path: '/meeting', element: <MeetingScreen />,},
  { path: '/', element: <Test />,},
  { path: '/intro', element: <Introduction />,},


];

const App= ()=> {
  return (
    <>
    <Router>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Router>
        </>
);
}

export default App;