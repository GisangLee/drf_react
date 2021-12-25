import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from "./pages";

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
      <Root/>,
  </BrowserRouter>,
  rootElement);