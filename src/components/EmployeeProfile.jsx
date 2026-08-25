function EmployeeProfile({ employee, onClose }) {
    if (!employee) {
        return null;
    }

    return (
        <div className="profile-modal-overlay">
            <div className="profile-modal">
                <button className="close-button" onClick={onClose}>✕</button>

                <h2>Employee Profile</h2>

                <img src={employee.image} alt={employee.name} className="modal-profile-image" />

                <h1>{employee.name}</h1>

                <p> <strong>Email:</strong>{" "}
                    {employee.email}
                </p>

                <p> <strong>Role:</strong>{" "}
                    {employee.role}
                </p>

                <p> <strong>Exprience:</strong>{" "}
                    {employee.exprience}
                </p>

                <p> <strong>Skills:</strong>{" "}
                    {employee.skills}
                </p>

                <p> <strong>City:</strong>{" "}
                    {employee.city}
                </p>

                <p>
                    <strong>Status:</strong>{" "}
                    {employee.isAvailable
                        ? "🟢 Available"
                        : "🔴 Not Available"}
                </p>

                <button className="modal-close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
export default EmployeeProfile;