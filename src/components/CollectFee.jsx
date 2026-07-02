import React from "react";
import { Link } from "react-router-dom";

const CollectFee = () => {
    return (
        <div className="container-fluid py-4">

            {/* Header */}

            <div className="mb-4">
                <h2 className="fw-bold">
                    <i className="bi bi-cash-stack me-2"></i>
                    Collect Student Fee
                </h2>

                <p className="text-body-secondary mb-0">
                    Record a new fee payment for a student.
                </p>
            </div>

            <form>

                {/* Student Details */}

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-header">
                        <h5 className="mb-0">
                            Student Details
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">

                                <label className="form-label">
                                    Student Name
                                </label>

                                <select className="form-select">
                                    <option>Select Student</option>
                                    <option>Rahul Sharma</option>
                                    <option>Anjali Verma</option>
                                    <option>Rohit Singh</option>
                                </select>

                            </div>

                            <div className="col-md-6">

                                <label className="form-label">
                                    Course
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value="React JS"
                                    readOnly
                                />

                            </div>

                            <div className="col-md-6">

                                <label className="form-label">
                                    Batch
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value="Morning Batch"
                                    readOnly
                                />

                            </div>

                            <div className="col-md-6">

                                <label className="form-label">
                                    Mobile Number
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value="9876543210"
                                    readOnly
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Fee Summary */}

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-header">
                        <h5 className="mb-0">
                            Fee Summary
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row text-center">

                            <div className="col-md-4">

                                <div className="border rounded p-3">

                                    <small className="text-body-secondary">
                                        Total Fee
                                    </small>

                                    <h4 className="fw-bold mt-2">
                                        ₹10,000
                                    </h4>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="border rounded p-3">

                                    <small className="text-body-secondary">
                                        Paid
                                    </small>

                                    <h4 className="fw-bold mt-2 text-success">
                                        ₹6,000
                                    </h4>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="border rounded p-3">

                                    <small className="text-body-secondary">
                                        Pending
                                    </small>

                                    <h4 className="fw-bold mt-2 text-danger">
                                        ₹4,000
                                    </h4>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Payment Details */}

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-header">
                        <h5 className="mb-0">
                            Payment Information
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">

                                <label className="form-label">
                                    Amount Paying
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Amount"
                                />

                            </div>

                            <div className="col-md-6">

                                <label className="form-label">
                                    Payment Date
                                </label>

                                <input
                                    type="date"
                                    className="form-control"
                                />

                            </div>

                            <div className="col-md-6">

                                <label className="form-label">
                                    Payment Method
                                </label>

                                <select className="form-select">

                                    <option>Cash</option>
                                    <option>UPI</option>
                                    <option>Card</option>
                                    <option>Net Banking</option>

                                </select>

                            </div>

                            <div className="col-md-6">

                                <label className="form-label">
                                    Transaction ID
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Optional"
                                />

                            </div>

                            <div className="col-12">

                                <label className="form-label">
                                    Remarks
                                </label>

                                <textarea
                                    className="form-control"
                                    rows="3"
                                    placeholder="Write Remarks..."
                                ></textarea>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Buttons */}

                <div className="d-flex justify-content-end gap-2">
                    <Link to={'/fee-management'}>
                        <button
                            type="reset"
                            className="btn btn-outline-secondary"
                        >
                            Cancel
                        </button>
                    </Link>

                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        <i className="bi bi-cash-coin me-2"></i>
                        Collect Fee
                    </button>

                </div>

            </form>

        </div>
    );
};

export default CollectFee;