import "./App.css";

import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";
import Courses from "./components/Courses";
import FeeManagement from "./components/FeeManagement";
import Setting from "./components/Setting";
import AddStudent from "./components/AddStudent";
import AddCourse from "./components/AddCourse";
import CollectFee from "./components/CollectFee";
import PayFee from "./components/PayFee";
import Receipt from "./components/Receipt";

function App() {
    return (
        <div className="app-layout">

            {/* Desktop Sidebar */}

            <aside className="sidebar desktop-sidebar">
                <Sidebar />
            </aside>

            {/* Main */}

            <main className="main-page">

                {/* Mobile Navbar */}

                <nav className="navbar navbar-light bg-body border-bottom d-lg-none px-3">

                    <button
                        className="btn btn-outline-primary"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#mobileSidebar"
                    >
                        <i className="bi bi-list fs-4"></i>
                    </button>

                    <span className="fw-bold">
                        Student Management
                    </span>

                </nav>

                {/* Mobile Sidebar */}

                <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="mobileSidebar"
                >

                    <div className="offcanvas-header">

                        <h5>Menu</h5>

                        <button
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                        ></button>

                    </div>

                    <div className="offcanvas-body p-0">

                        <Sidebar />

                    </div>

                </div>

                {/* Pages */}

                <Routes>

                    <Route path="/" element={<Dashboard />} />

                    <Route path="/students" element={<Students />} />

                    <Route
                        path="/students/add-student"
                        element={<AddStudent />}
                    />

                    <Route path="/courses" element={<Courses />} />

                    <Route
                        path="/courses/add-course"
                        element={<AddCourse />}
                    />

                    <Route
                        path="/fee-management"
                        element={<FeeManagement />}
                    />

                    <Route
                        path="/fee-management/collect-fee"
                        element={<CollectFee />}
                    />

                    <Route
                        path="/fee-management/pay-fee"
                        element={<PayFee />}
                    />

                    <Route
                        path="/fee-management/receipt"
                        element={<Receipt />}
                    />

                    <Route path="/setting" element={<Setting />} />

                </Routes>

            </main>

        </div>
    );
}

export default App;