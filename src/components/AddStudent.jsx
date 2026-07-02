import React from "react";
import { Link } from "react-router-dom";

const AddStudent = () => {
    return (
        <div className="container-fluid py-4">

            {/* Page Header */}

            <div className="mb-4">
                <h2 className="fw-bold">
                    <i className="bi bi-person-plus-fill me-2"></i>
                    Add New Student
                </h2>

                <p className="text-body-secondary mb-0">
                    Fill in the details below to register a new student.
                </p>
            </div>

            <form>

                {/* Student Information */}

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-header">
                        <h5 className="mb-0">
                            Student Information
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter First Name"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Last Name"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Mobile Number
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Mobile Number"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Date of Birth
                                </label>

                                <input
                                    type="date"
                                    className="form-control"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Gender
                                </label>

                                <select className="form-select">
                                    <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Academic Information */}

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-header">
                        <h5 className="mb-0">
                            Academic Information
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-4">
                                <label className="form-label">
                                    Course
                                </label>

                                <select className="form-select">
                                    <option>Select Course</option>
                                    <option>HTML & CSS</option>
                                    <option>JavaScript</option>
                                    <option>React JS</option>
                                    <option>Python</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">
                                    Batch
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Morning Batch"
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">
                                    Admission Date
                                </label>

                                <input
                                    type="date"
                                    className="form-control"
                                />
                            </div>

                        </div>

                    </div>

                </div>

                {/* Address */}

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-header">
                        <h5 className="mb-0">
                            Address Information
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-12">

                                <label className="form-label">
                                    Address
                                </label>

                                <textarea
                                    className="form-control"
                                    rows="3"
                                    placeholder="Enter Address"
                                ></textarea>

                            </div>

                            <div className="col-md-4">

                                <label className="form-label">
                                    City
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                />

                            </div>

                            <div className="col-md-4">

                                <label className="form-label">
                                    State
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                />

                            </div>

                            <div className="col-md-4">

                                <label className="form-label">
                                    Pincode
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Guardian */}

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-header">
                        <h5 className="mb-0">
                            Guardian Information
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">

                                <label className="form-label">
                                    Parent / Guardian Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                />

                            </div>

                            <div className="col-md-6">

                                <label className="form-label">
                                    Parent Mobile
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Buttons */}

                <div className="d-flex justify-content-end gap-2">

                    <Link to={'/students'}>
                        <button
                            type="reset"
                            className="btn btn-outline-secondary"
                        >
                            Cancel
                        </button>
                    </Link>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        <i className="bi bi-check-circle me-2"></i>
                        Add Student
                    </button>

                </div>

            </form>

        </div>
    );
};

export default AddStudent;