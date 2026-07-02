import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
    return (
        <div className="container-fluid py-4">

            {/* Header */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold">Courses</h2>
                    <p className="text-muted mb-0">
                        Manage all available courses.
                    </p>
                </div>
                <Link to={'/courses/add-course'}>
                    <button className="btn btn-primary">
                        <i className="bi bi-plus-circle-fill me-2"></i>
                        Add Course
                    </button>
                </Link>

            </div>

            {/* Search */}

            <div className="card shadow-sm border-0 mb-4">

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-4">

                            <div className="input-group">

                                <span className="input-group-text">
                                    <i className="bi bi-search"></i>
                                </span>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Course..."
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Course Table */}

            <div className="card shadow-sm border-0">

                <div className="card-header">
                    <h5 className="mb-0 fw-bold">
                        Course List
                    </h5>
                </div>

                <div className="card-body p-0">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle mb-0">

                            <thead className="table">

                                <tr>
                                    <th>ID</th>
                                    <th>Course Name</th>
                                    <th>Duration</th>
                                    <th>Fee</th>
                                    <th>Trainer</th>
                                    <th>Status</th>
                                    <th className="text-center">Action</th>
                                </tr>

                            </thead>

                            <tbody>

                                <tr>
                                    <td>1</td>
                                    <td>HTML & CSS</td>
                                    <td>1 Month</td>
                                    <td>₹2,000</td>
                                    <td>Raju</td>
                                    <td>
                                        <span className="badge bg-success">
                                            Active
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <button className="btn btn-warning btn-sm me-2">
                                            <i className="bi bi-pencil"></i>
                                        </button>

                                        <button className="btn btn-danger btn-sm">
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>JavaScript</td>
                                    <td>2 Months</td>
                                    <td>₹3,500</td>
                                    <td>Amit</td>
                                    <td>
                                        <span className="badge bg-success">
                                            Active
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <button className="btn btn-warning btn-sm me-2">
                                            <i className="bi bi-pencil"></i>
                                        </button>

                                        <button className="btn btn-danger btn-sm">
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>React JS</td>
                                    <td>2 Months</td>
                                    <td>₹5,000</td>
                                    <td>Priya</td>
                                    <td>
                                        <span className="badge bg-success">
                                            Active
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <button className="btn btn-warning btn-sm me-2">
                                            <i className="bi bi-pencil"></i>
                                        </button>

                                        <button className="btn btn-danger btn-sm">
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>Python</td>
                                    <td>3 Months</td>
                                    <td>₹6,000</td>
                                    <td>Sneha</td>
                                    <td>
                                        <span className="badge bg-secondary">
                                            Inactive
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <button className="btn btn-warning btn-sm me-2">
                                            <i className="bi bi-pencil"></i>
                                        </button>

                                        <button className="btn btn-danger btn-sm">
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Courses;