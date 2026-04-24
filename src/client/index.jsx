import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Tutorials from './Tutorials';
import FormTutorial from './FormTutorial';
import HabitTracker from './HabitTracker';
import App from './movieApp'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <div>
          {/* ナビゲーションボタン */}
          <nav style = {{ margin : "20px"}}>
            <Link to = "/" style = {{ margin : "5px"}}>
              <button>Home</button>
            </Link>

            <Link to = "/tutorials" style = {{ margin : "5px"}}>
              <button>Tutorials</button>
            </Link>

            <Link to = "/form" style = {{ margin : "5px"}}>
              <button>FormTutorial</button>
            </Link>

            <Link to = "/habit" style = {{ margin : "5px"}}>
              <button>HabitTracker</button>
            </Link>

            <Link to = "/movieApp" style = {{ margin : "5px"}}>
              <button>movieApp</button>
            </Link>
          </nav>

          {/* 画面切り替え */}
          <Routes>
            <Route path='/' />
            <Route path='/tutorials' element={<Tutorials />} />
            <Route path='/form' element={<FormTutorial />} />
            <Route path='/habit' element={<HabitTracker />} />
            <Route path='/movieApp' element={<App />} />
            <Route path='*' element={<main style={{ padding: '1rem' }}>
                  <p>There&apos;s nothing here! </p>
                  <h2>Click button!</h2>
                </main>
            }/>
          </Routes>
        </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('contents'),
);
