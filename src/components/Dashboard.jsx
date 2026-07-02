import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="container-fluid py-4">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold mb-1">Dashboard</h2>
                    <p className="text-muted mb-0">
                        Welcome back! Here's today's overview.
                    </p>
                </div>

                <Link to={'/students/add-student'}>
                    <button className="btn btn-primary">
                        <i className="bi bi-person-plus-fill me-2"></i>
                        Add Student
                    </button>
                </Link>
            </div>

            {/* Statistics Cards */}

            <div className="row g-4 mb-4">

                <div className="col-lg-3 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">

                            <div>
                                <small className="text-muted">
                                    Total Students
                                </small>

                                <h2 className="fw-bold mt-2">250</h2>
                            </div>

                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle">
                                <i className="bi bi-people-fill fs-3 text-primary"></i>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">

                            <div>
                                <small className="text-muted">
                                    Courses
                                </small>

                                <h2 className="fw-bold mt-2">12</h2>
                            </div>

                            <div className="bg-success bg-opacity-10 p-3 rounded-circle">
                                <i className="bi bi-book-fill fs-3 text-success"></i>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">

                            <div>
                                <small className="text-muted">
                                    Trainers
                                </small>

                                <h2 className="fw-bold mt-2">8</h2>
                            </div>

                            <div className="bg-warning bg-opacity-10 p-3 rounded-circle">
                                <i className="bi bi-person-workspace fs-3 text-warning"></i>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">

                            <div>
                                <small className="text-muted">
                                    Attendance
                                </small>

                                <h2 className="fw-bold mt-2">95%</h2>
                            </div>

                            <div className="bg-danger bg-opacity-10 p-3 rounded-circle">
                                <i className="bi bi-calendar-check-fill fs-3 text-danger"></i>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* Second Row */}

            <div className="row g-4">

                {/* Recent Activity */}

                <div className="col-lg-8">

                    <div className="card shadow-sm border-0">

                        <div className="card-header">
                            <h5 className="mb-0 fw-bold">
                                Recent Activities
                            </h5>
                        </div>

                        <div className="card-body">

                            <table className="table table-hover align-middle">

                                <thead>

                                    <tr>
                                        <th>Student</th>
                                        <th>Activity</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>
                                        <td>Rahul Sharma</td>
                                        <td>Registered</td>
                                        <td>Today</td>
                                        <td>
                                            <span className="badge bg-success">
                                                Completed
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Anjali Verma</td>
                                        <td>Fee Submitted</td>
                                        <td>Today</td>
                                        <td>
                                            <span className="badge bg-primary">
                                                Paid
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Rohit Singh</td>
                                        <td>Attendance</td>
                                        <td>Yesterday</td>
                                        <td>
                                            <span className="badge bg-warning text-dark">
                                                Present
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Pooja Rawat</td>
                                        <td>Assignment Submitted</td>
                                        <td>Yesterday</td>
                                        <td>
                                            <span className="badge bg-info">
                                                Received
                                            </span>
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <div className="col-lg-4">

                    {/* Quick Actions */}

                    <div className="card shadow-sm border-0 mb-4">

                        <div className="card-header">
                            <h5 className="mb-0 fw-bold">
                                Quick Actions
                            </h5>
                        </div>

                        <div className="card-body d-grid gap-3">

                            <button className="btn btn-outline-primary">
                                <i className="bi bi-person-plus me-2"></i>
                                Add Student
                            </button>

                            <button className="btn btn-outline-success">
                                <i className="bi bi-journal-plus me-2"></i>
                                Add Course
                            </button>

                            <button className="btn btn-outline-warning">
                                <i className="bi bi-calendar-check me-2"></i>
                                Mark Attendance
                            </button>

                            <button className="btn btn-outline-danger">
                                <i className="bi bi-cash-coin me-2"></i>
                                Collect Fees
                            </button>

                        </div>

                    </div>

                    {/* Upcoming Classes */}

                    <div className="card shadow-sm border-0">

                        <div className="card-header">
                            <h5 className="mb-0 fw-bold">
                                Today's Classes
                            </h5>
                        </div>

                        <div className="card-body">

                            <div className="border-bottom pb-2 mb-2">
                                <strong>HTML & CSS</strong>
                                <br />
                                <small className="text-muted">
                                    10:00 AM - 11:30 AM
                                </small>
                            </div>

                            <div className="border-bottom pb-2 mb-2">
                                <strong>JavaScript</strong>
                                <br />
                                <small className="text-muted">
                                    12:00 PM - 1:30 PM
                                </small>
                            </div>

                            <div>
                                <strong>React Basics</strong>
                                <br />
                                <small className="text-muted">
                                    3:00 PM - 5:00 PM
                                </small>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;