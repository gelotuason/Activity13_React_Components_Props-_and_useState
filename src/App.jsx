import Header from './Header.jsx';
import Counter from './Counter.jsx';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import CountDisplay from './CountDisplay.jsx';

export default function App() {
  
  return (
    <div className='container-fluid d-flex flex-column min-vh-100 bg-light text-center'>
      <Header title={"Activity 13"} />
      <Counter />
      <Footer copyright={"Copyright © 2024 Ferangelo Tuason. All rights reserved."} />
    </div>
  );
}
