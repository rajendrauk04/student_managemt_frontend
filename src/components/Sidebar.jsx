import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar p-3">

            <h4 className="text-center fw-bold mb-4">
                <i className="bi bi-mortarboard-fill me-2"></i>
                SMS
            </h4>

            <ul className="list-group sidebar-menu">

                <li className="list-group-item border-0 p-0">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `sidebar-link ${isActive ? "active" : ""}`
                        }
                    >
                        <i className="bi bi-speedometer2"></i>
                        Dashboard
                    </NavLink>
                </li>

                <li className="list-group-item border-0 p-0">
                    <NavLink
                        to="/students"
                        className={({ isActive }) =>
                            `sidebar-link ${isActive ? "active" : ""}`
                        }
                    >
                        <i className="bi bi-people-fill"></i>
                        Students
                    </NavLink>
                </li>

                <li className="list-group-item border-0 p-0">
                    <NavLink
                        to="/courses"
                        className={({ isActive }) =>
                            `sidebar-link ${isActive ? "active" : ""}`
                        }
                    >
                        <i className="bi bi-book-half"></i>
                        Courses
                    </NavLink>
                </li>

                <li className="list-group-item border-0 p-0">
                    <NavLink
                        to="/fee-management"
                        className={({ isActive }) =>
                            `sidebar-link ${isActive ? "active" : ""}`
                        }
                    >
                        <i className="bi bi-cash-stack"></i>
                        Fee Management
                    </NavLink>
                </li>

                <li className="list-group-item border-0 p-0">
                    <NavLink
                        to="/setting"
                        className={({ isActive }) =>
                            `sidebar-link ${isActive ? "active" : ""}`
                        }
                    >
                        <i className="bi bi-gear-fill"></i>
                        Settings
                    </NavLink>
                </li>

            </ul>

        </div>
    );
};

export default Sidebar;