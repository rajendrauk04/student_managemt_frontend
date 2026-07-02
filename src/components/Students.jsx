import React from "react";
import { Link } from "react-router-dom";

const Students = () => {
    return (
        <div className="container-fluid py-4">

            {/* Header */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold">Students</h2>
                    <p className="text-muted mb-0">
                        Manage all student records.
                    </p>
                </div>
                <Link to={'/students/add-student'}>
                    <button className="btn btn-primary">
                        <i className="bi bi-person-plus-fill me-2"></i>
                        Add Student
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
                                    placeholder="Search Student..."
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Student Table */}

            <div className="card shadow-sm border-0">

                <div className="card-header">

                    <h5 className="mb-0 fw-bold">
                        Student List
                    </h5>

                </div>

                <div className="card-body p-0">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle mb-0">

                            <thead className="table">

                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Course</th>
                                    <th>Mobile</th>
                                    <th>Status</th>
                                    <th className="text-center">Action</th>
                                </tr>

                            </thead>

                            <tbody>

                                <tr>
                                    <td>1</td>
                                    <td>Rahul Sharma</td>
                                    <td>rahul@gmail.com</td>
                                    <td>React JS</td>
                                    <td>9876543210</td>
                                    <td>
                                        <span className="badge bg-success">
                                            Active
                                        </span>
                                    </td>
                                    <td className="text-center">

                                        <button className="btn btn-sm btn-warning me-2">
                                            <i className="bi bi-pencil"></i>
                                        </button>

                                        <button className="btn btn-sm btn-danger">
                                            <i className="bi bi-trash"></i>
                                        </button>

                                    </td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Anjali Verma</td>
                                    <td>anjali@gmail.com</td>
                                    <td>Python</td>
                                    <td>9876501234</td>
                                    <td>
                                        <span className="badge bg-success">
                                            Active
                                        </span>
                                    </td>
                                    <td className="text-center">

                                        <button className="btn btn-sm btn-warning me-2">
                                            <i className="bi bi-pencil"></i>
                                        </button>

                                        <button className="btn btn-sm btn-danger">
                                            <i className="bi bi-trash"></i>
                                        </button>

                                    </td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Rohit Singh</td>
                                    <td>rohit@gmail.com</td>
                                    <td>HTML & CSS</td>
                                    <td>9988776655</td>
                                    <td>
                                        <span className="badge bg-secondary">
                                            Inactive
                                        </span>
                                    </td>
                                    <td className="text-center">

                                        <button className="btn btn-sm btn-warning me-2">
                                            <i className="bi bi-pencil"></i>
                                        </button>

                                        <button className="btn btn-sm btn-danger">
                                            <i className="bi bi-trash"></i>
                                        </button>

                                    </td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>Pooja Rawat</td>
                                    <td>pooja@gmail.com</td>
                                    <td>JavaScript</td>
                                    <td>9871234567</td>
                                    <td>
                                        <span className="badge bg-success">
                                            Active
                                        </span>
                                    </td>
                                    <td className="text-center">

                                        <button className="btn btn-sm btn-warning me-2">
                                            <i className="bi bi-pencil"></i>
                                        </button>

                                        <button className="btn btn-sm btn-danger">
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

export default Students;