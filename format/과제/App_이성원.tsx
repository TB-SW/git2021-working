import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";

import Home from "./Photo_이성원";

const Todo = lazy(() => import("./Photo_이성원"));
const Feed = lazy(() => import("./Photo_이성원"));
const Photo = lazy(() => import("./Photo_이성원"));

function App() {
  return (
    <Router>
      <div style={{ width: "900px" }} className="mx-auto">
        <nav
          style={{ width: "200px", height: "100vh" }}
          className="position-fixed"
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/todo">Todo</Link>
            </li>

            <li>
              <Link to="/feed">Feed</Link>
            </li>

            <li>
              <Link to="/photo">Photo</Link>
            </li>
          </ul>
        </nav>
        <main style={{ marginLeft: "200px", marginTop: "20px" }}>
          <Suspense
            fallback={
              <div>
                <h1 style={{ color: "black" }}>Now Loading....</h1>
              </div>
            }
          >
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/todo" component={Todo}></Route>
              <Route path="/feed" component={Feed} />
              <Route path="/photo" component={Photo} />
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;