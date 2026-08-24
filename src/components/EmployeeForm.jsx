import { useState } from "react";
import darshan from "../assets/darshan.jpeg"

function EmployeeForm({ onAddEmployee }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        const newEmployee = {
            id: Date.now(),
            image: darshan,
            name: name,
            email: email,
            role: role,
            experience: "Fresher",
            skills: "React",
            city: city,
            isAvailable: true,
            buttonColor: "#2563eb"
        };

        onAddEmployee(newEmployee);

        // Clear form

        setName("");
        setEmail("");
        setRole("");
        setCity("");
    };

    return (
        <div className="employee-form">

            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="form-group">
                    <label>
                        Name
                    </label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        placeholder="Enter employee name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Enter employee email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>
                        Role
                    </label>
                    <input
                        type="text"
                        value={role}
                        onChange={(e) =>
                            setRole(e.target.value)
                        }
                        placeholder="Enter employee role"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>
                        City
                    </label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) =>
                            setCity(e.target.value)
                        }
                        placeholder="Enter employee city"
                        required
                    />
                </div>

                {/* submit */}

                <button
                    type="submit"
                    className="add-employee-button"
                >
                    Add Employee
                </button>
            </form>
        </div>
    );
}
export default EmployeeForm;