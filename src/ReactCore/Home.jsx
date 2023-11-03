import { Link, NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

let Home = () => {
  let location = useLocation();
  return (
    <>
      <div className="row g-0">
        <div className="col-sm-12 col-lg-2 col-xl-2">
          <div
            className="flex-shrink-0 p-3 bg-secondary text-white"
            style={{ width: 200 }}
          >
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
            >
              <span className="fs-5 fw-semibold text-white">Snippets</span>
            </a>
            <ul className="list-unstyled ps-0">
              <li className="mb-1">
                <button
                  className="btn btn-toggle align-items-center rounded collapsed text-white"
                  data-bs-toggle="collapse"
                  data-bs-target="#home-collapse"
                  aria-expanded="true"
                >
                  ReactCore
                </button>
                <div className="collapse show" id="home-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <NavLink
                        to="/task1"
                        className="link-dark rounded text-white"
                      >
                        UseState-increment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/todoList"
                        className="link-dark rounded text-white"
                      >
                        Todo
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/task3"
                        className="link-dark rounded text-white"
                      >
                        UseState-cart
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/task4"
                        className="link-dark rounded text-white"
                      >
                        UseState-Fetch Users Data
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/task6"
                        className="link-dark rounded text-white"
                      >
                        UseState-PropDrill-1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/task7"
                        className="link-dark rounded text-white"
                      >
                        UseState-PropDrill-2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="" className="link-dark rounded text-white">
                        UseState-Caluculator
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/usersList"
                        className="link-dark rounded text-white"
                      >
                        UseEffect-1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="" className="link-dark rounded text-white">
                        UseEffect-2
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button
                  className="btn btn-toggle align-items-center rounded collapsed text-white"
                  data-bs-toggle="collapse"
                  data-bs-target="#dashboard-collapse"
                  aria-expanded="false"
                >
                  Redux{" "}
                </button>
                <div className="collapse" id="dashboard-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <a href="#" className="link-dark rounded">
                        Todo
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link-dark rounded">
                        CRUD
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link-dark rounded">
                        Task1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link-dark rounded">
                        Task2
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="border-top my-3"></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-lg-10 col-xl-10">
          {location.pathname === "/" ? (
            <div className="p-4 p-md-5 mb-4 mt-4 m-4 text-white rounded bg-secondary">
              <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">
                  Welcome to React Snippets..
                </h1>
                <p className="lead my-3">
                  Multiple lines of text that form the lede, informing new
                  readers quickly and efficiently about what’s most interesting
                  in this post’s contents.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};
export default Home;
