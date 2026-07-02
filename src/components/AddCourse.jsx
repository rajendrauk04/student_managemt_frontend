import React from "react";
import { Link } from "react-router-dom";

const AddCourse = () => {
    return (
        <div className="container-fluid py-4">

            {/* Header */}

            <div className="mb-4">
                <h2 className="fw-bold">
                    <i className="bi bi-book-half me-2"></i>
                    Add New Course
                </h2>

                <p className="text-body-secondary mb-0">
                    Create a new course by filling in the information below.
                </p>
            </div>

            <form>

                {/* Course Information */}

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-header">
                        <h5 className="mb-0">
                            Course Information
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">
                                    Course Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="React JS"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Course Code
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="RCT101"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Trainer Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Trainer Name"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Category
                                </label>

                                <select className="form-select">
                                    <option>Select Category</option>
                                    <option>Web Development</option>
                                    <option>Programming</option>
                                    <option>Database</option>
                                    <option>AI & ML</option>
                                </select>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Duration & Fee */}

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-header">
                        <h5 className="mb-0">
                            Duration & Fee
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-4">

                                <label className="form-label">
                                    Duration
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="2 Months"
                                />

                            </div>

                            <div className="col-md-4">

                                <label className="form-label">
                                    Course Fee
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="5000"
                                />

                            </div>

                            <div className="col-md-4">

                                <label className="form-label">
                                    Start Date
                                </label>

                                <input
                                    type="date"
                                    className="form-control"
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Description */}

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-header">
                        <h5 className="mb-0">
                            Course Description
                        </h5>
                    </div>

                    <div className="card-body">

                        <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Write course description..."
                        ></textarea>

                    </div>

                </div>

                {/* Settings */}

                <div className="card shadow-sm border-0 mb-4">

                    <div className="card-header">
                        <h5 className="mb-0">
                            Course Settings
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">

                                <label className="form-label">
                                    Course Status
                                </label>

                                <select className="form-select">
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>

                            </div>

                            <div className="col-md-6">

                                <label className="form-label">
                                    Maximum Students
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="30"
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Buttons */}

                <div className="d-flex justify-content-end gap-2">
                    <Link to={'/courses'}>
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
                        Save Course
                    </button>

                </div>

            </form>

        </div>
    );
};

export default AddCourse;