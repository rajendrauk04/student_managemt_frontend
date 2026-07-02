import React from "react";

const PayFee = () => {
    return (
        <div className="container-fluid py-4">

            {/* Header */}

            <div className="mb-4">

                <h2 className="fw-bold">
                    <i className="bi bi-credit-card-2-front me-2"></i>
                    Pay Student Fee
                </h2>

                <p className="text-body-secondary mb-0">
                    Complete the pending fee payment.
                </p>

            </div>

            {/* Student Details */}

            <div className="card shadow-sm border-0 mb-4">

                <div className="card-header">
                    <h5 className="mb-0">
                        Student Details
                    </h5>
                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <label className="form-label fw-semibold">
                                Student Name
                            </label>

                            <input
                                className="form-control"
                                value="Rahul Sharma"
                                readOnly
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label fw-semibold">
                                Course
                            </label>

                            <input
                                className="form-control"
                                value="React JS"
                                readOnly
                            />

                        </div>

                        <div className="col-md-6">

                            <label className="form-label fw-semibold">
                                Batch
                            </label>

                            <input
                                className="form-control"
                                value="Morning Batch"
                                readOnly
                            />

                        </div>

                        <div className="col-md-6">

                            <label className="form-label fw-semibold">
                                Mobile
                            </label>

                            <input
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

                                <h4 className="fw-bold text-success mt-2">
                                    ₹6,000
                                </h4>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="border rounded p-3">

                                <small className="text-body-secondary">
                                    Pending
                                </small>

                                <h4 className="fw-bold text-danger mt-2">
                                    ₹4,000
                                </h4>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Payment */}

            <div className="card shadow-sm border-0">

                <div className="card-header">

                    <h5 className="mb-0">
                        Payment Details
                    </h5>

                </div>

                <div className="card-body">

                    <div className="mb-4">

                        <label className="form-label">
                            Amount to Pay
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            value="4000"
                            readOnly
                        />

                    </div>

                    <div className="mb-4">

                        <label className="form-label d-block">
                            Payment Method
                        </label>

                        <div className="form-check">

                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                defaultChecked
                            />

                            <label className="form-check-label">
                                Cash
                            </label>

                        </div>

                        <div className="form-check">

                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                            />

                            <label className="form-check-label">
                                UPI
                            </label>

                        </div>

                        <div className="form-check">

                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                            />

                            <label className="form-check-label">
                                Debit / Credit Card
                            </label>

                        </div>

                        <div className="form-check">

                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                            />

                            <label className="form-check-label">
                                Net Banking
                            </label>

                        </div>

                    </div>

                    <div className="mb-4">

                        <label className="form-label">
                            Transaction ID
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Transaction ID (Optional)"
                        />

                    </div>

                    <div className="d-flex justify-content-end gap-2">

                        <button className="btn btn-outline-secondary">
                            Cancel
                        </button>

                        <button className="btn btn-primary">

                            <i className="bi bi-credit-card me-2"></i>

                            Proceed To Payment

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default PayFee;