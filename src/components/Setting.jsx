import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Setting = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className="container-fluid py-4">

            {/* Header */}

            <div className="mb-4">
                <h2 className="fw-bold">Settings</h2>
                <p className="text-muted mb-0">
                    Manage your institute settings.
                </p>
            </div>

            <div className="row">

                {/* Institute Information */}

                <div className="col-lg-6 mb-4">

                    <div className="card shadow-sm border-0">

                        <div className="card-header">
                            <h5 className="mb-0">
                                Institute Information
                            </h5>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">
                                <label className="form-label">
                                    Institute Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter institute name"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter phone number"
                                />
                            </div>

                            <div>
                                <label className="form-label">
                                    Address
                                </label>

                                <textarea
                                    className="form-control"
                                    rows="3"
                                    placeholder="Enter address"
                                ></textarea>
                            </div>

                        </div>

                    </div>

                </div>

                {/* General Settings */}

                <div className="col-lg-6 mb-4">

                    <div className="card shadow-sm border-0">

                        <div className="card-header">
                            <h5 className="mb-0">
                                General Settings
                            </h5>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">

                                <label className="form-label">
                                    Theme
                                </label>

                                <select
                                    className="form-select"
                                    value={theme}
                                    onChange={(e) => setTheme(e.target.value)}
                                >

                                    <option value="light">
                                        Light
                                    </option>

                                    <option value="dark">
                                        Dark
                                    </option>

                                </select>

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Language
                                </label>

                                <select className="form-select">

                                    <option>English</option>
                                    <option>Hindi</option>

                                </select>

                            </div>

                            <div className="form-check form-switch mb-3">

                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="emailNotification"
                                />

                                <label
                                    className="form-check-label"
                                    htmlFor="emailNotification"
                                >
                                    Email Notifications
                                </label>

                            </div>

                            <div className="form-check form-switch mb-3">

                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="smsNotification"
                                />

                                <label
                                    className="form-check-label"
                                    htmlFor="smsNotification"
                                >
                                    SMS Notifications
                                </label>

                            </div>

                            <button className="btn btn-primary mt-3">
                                <i className="bi bi-check-circle me-2"></i>
                                Save Settings
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Setting;