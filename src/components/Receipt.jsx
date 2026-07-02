import React from "react";

const Receipt = () => {
    return (
        <div className="container py-4">

            <div className="card shadow border-0">

                {/* Header */}

                <div className="card-header text-center py-4">

                    <h2 className="fw-bold mb-1">
                        Student Fee Receipt
                    </h2>

                    <p className="mb-1">
                        <strong>ABC Coding Academy</strong>
                    </p>

                    <small className="text-body-secondary">
                        Delhi, India
                    </small>

                    <br />

                    <small className="text-body-secondary">
                        +91 9876543210 | abc@gmail.com
                    </small>

                </div>

                <div className="card-body">

                    {/* Receipt Information */}

                    <div className="row mb-4">

                        <div className="col-md-6">

                            <table className="table table-borderless mb-0">

                                <tbody>

                                    <tr>
                                        <th width="150">Receipt No.</th>
                                        <td>RCPT-2026001</td>
                                    </tr>

                                    <tr>
                                        <th>Payment Date</th>
                                        <td>02 July 2026</td>
                                    </tr>

                                    <tr>
                                        <th>Payment Mode</th>
                                        <td>UPI</td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        <div className="col-md-6">

                            <table className="table table-borderless mb-0">

                                <tbody>

                                    <tr>
                                        <th width="150">Transaction ID</th>
                                        <td>TXN45789451</td>
                                    </tr>

                                    <tr>
                                        <th>Status</th>
                                        <td>
                                            <span className="badge bg-success">
                                                Paid
                                            </span>
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                    {/* Student Information */}

                    <div className="card mb-4">

                        <div className="card-header">
                            <h5 className="mb-0">
                                Student Information
                            </h5>
                        </div>

                        <div className="card-body">

                            <div className="row">

                                <div className="col-md-6">

                                    <p>
                                        <strong>Name :</strong> Rahul Sharma
                                    </p>

                                    <p>
                                        <strong>Course :</strong> React JS
                                    </p>

                                </div>

                                <div className="col-md-6">

                                    <p>
                                        <strong>Batch :</strong> Morning Batch
                                    </p>

                                    <p>
                                        <strong>Mobile :</strong> 9876543210
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Fee Details */}

                    <div className="card mb-4">

                        <div className="card-header">

                            <h5 className="mb-0">
                                Fee Details
                            </h5>

                        </div>

                        <div className="card-body p-0">

                            <table className="table table-bordered mb-0">

                                <thead>

                                    <tr>

                                        <th>Description</th>

                                        <th className="text-end">
                                            Amount
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>

                                        <td>Total Fee</td>

                                        <td className="text-end">
                                            ₹10,000
                                        </td>

                                    </tr>

                                    <tr>

                                        <td>Paid Before</td>

                                        <td className="text-end">
                                            ₹6,000
                                        </td>

                                    </tr>

                                    <tr>

                                        <td>Current Payment</td>

                                        <td className="text-end">
                                            ₹2,000
                                        </td>

                                    </tr>

                                    <tr className="table-warning">

                                        <th>Remaining Amount</th>

                                        <th className="text-end">
                                            ₹2,000
                                        </th>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                    {/* Remarks */}

                    <div className="mb-5">

                        <h6>Remarks</h6>

                        <p className="text-body-secondary mb-0">
                            Payment received successfully.
                        </p>

                    </div>

                    {/* Signature */}

                    <div className="row">

                        <div className="col-6"></div>

                        <div className="col-6 text-center">

                            <hr />

                            <strong>
                                Authorized Signature
                            </strong>

                        </div>

                    </div>

                </div>

                {/* Footer */}

                <div className="card-footer bg-transparent">

                    <div className="d-flex justify-content-end gap-2">

                        <button className="btn btn-outline-primary">

                            <i className="bi bi-printer me-2"></i>

                            Print Receipt

                        </button>

                        <button className="btn btn-success">

                            <i className="bi bi-file-earmark-pdf me-2"></i>

                            Download PDF

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Receipt;