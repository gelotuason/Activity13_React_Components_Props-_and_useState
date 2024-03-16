import { useState } from 'react';
import Header from './Header.jsx';
import Counter from './Counter.jsx';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container-fluid d-flex flex-column min-vh-100 bg-dark text-center text-white'>
      <Header title={"Activity 13"} count={count} />
      <Counter count={count} setCount={setCount} />
      <Footer copyright={"Copyright © 2024 Ferangelo Tuason. All rights reserved."} />
    </div>
  );
}
