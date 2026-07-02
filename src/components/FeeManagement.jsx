import React from "react";
import { Link } from "react-router-dom";

const FeeManagement = () => {
    return (
        <div className="container-fluid py-4">

            {/* Header */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold">Fee Management</h2>
                    <p className="text-muted mb-0">
                        Manage student fee records and payments.
                    </p>
                </div>
                <Link to={'/fee-management/collect-fee'}>
                    <button className="btn btn-success">
                        <i className="bi bi-cash-coin me-2"></i>
                        Collect Fee
                    </button>
                </Link>

            </div>

            {/* Summary Cards */}

            <div className="row g-4 mb-4">

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow-sm border-0">

                        <div className="card-body">

                            <small className="text-muted">
                                Total Collection
                            </small>

                            <h3 className="fw-bold mt-2">
                                ₹1,25,000
                            </h3>

                        </div>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow-sm border-0">

                        <div className="card-body">

                            <small className="text-muted">
                                Pending Fees
                            </small>

                            <h3 className="fw-bold mt-2 text-danger">
                                ₹35,000
                            </h3>

                        </div>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow-sm border-0">

                        <div className="card-body">

                            <small className="text-muted">
                                Paid Students
                            </small>

                            <h3 className="fw-bold mt-2 text-success">
                                42
                            </h3>

                        </div>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6">

                    <div className="card shadow-sm border-0">

                        <div className="card-body">

                            <small className="text-muted">
                                Pending Students
                            </small>

                            <h3 className="fw-bold mt-2 text-warning">
                                10
                            </h3>

                        </div>

                    </div>

                </div>

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

            {/* Fee Table */}

            <div className="card shadow-sm border-0">

                <div className="card-header">

                    <h5 className="mb-0 fw-bold">
                        Fee Records
                    </h5>

                </div>

                <div className="card-body p-0">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle mb-0">

                            <thead className="table">

                                <tr>
                                    <th>ID</th>
                                    <th>Student</th>
                                    <th>Course</th>
                                    <th>Total Fee</th>
                                    <th>Paid</th>
                                    <th>Pending</th>
                                    <th>Status</th>
                                    <th className="text-center">Action</th>
                                </tr>

                            </thead>

                            <tbody>

                                <tr>
                                    <td>1</td>
                                    <td>Rahul Sharma</td>
                                    <td>React JS</td>
                                    <td>₹10,000</td>
                                    <td>₹10,000</td>
                                    <td>₹0</td>

                                    <td>
                                        <span className="badge bg-success">
                                            Paid
                                        </span>
                                    </td>

                                    <td className="text-center">
                                        <Link to={'/fee-management/receipt'}>
                                            <button className="btn btn-primary btn-sm">
                                                Receipt
                                            </button>
                                        </Link>

                                    </td>

                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Anjali Verma</td>
                                    <td>Python</td>
                                    <td>₹12,000</td>
                                    <td>₹8,000</td>
                                    <td>₹4,000</td>

                                    <td>
                                        <span className="badge bg-warning text-dark">
                                            Partial
                                        </span>
                                    </td>

                                    <td className="text-center">
                                        <Link to={'/fee-management/pay-fee'}>
                                            <button className="btn btn-success btn-sm">
                                                Pay Fee
                                            </button>
                                        </Link>

                                    </td>

                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Rohit Singh</td>
                                    <td>JavaScript</td>
                                    <td>₹8,000</td>
                                    <td>₹0</td>
                                    <td>₹8,000</td>

                                    <td>
                                        <span className="badge bg-danger">
                                            Pending
                                        </span>
                                    </td>

                                    <td className="text-center">
                                        <Link to={'/fee-management/pay-fee'}>
                                            <button className="btn btn-success btn-sm">
                                                Pay Fee
                                            </button>
                                        </Link>
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

export default FeeManagement;