import { useEffect, useState } from "react";
import darshan from "../assets/darshan.jpeg"

function EmployeeForm({
    onAddEmployee,
    editingEmployee,
    onUpdateEmployee,
    onCancelEdit,
}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [experience, setExperience] = useState("");
    const [skills, setSkills] = useState("");
    const [city, setCity] = useState("");

    useEffect(() => {
        if (editingEmployee) {
            setName(editingEmployee.name);
            setEmail(editingEmployee.email);
            setRole(editingEmployee.role);
            setExperience(editingEmployee.experience);
            setSkills(editingEmployee.skills);
            setCity(editingEmployee.city);
        } else {
            clearForm();
        }
    }, [editingEmployee]);

    const clearForm = () => {
        setName("");
        setEmail("");
        setRole("");
        setExperience("");
        setSkills("");
        setCity("");
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (editingEmployee) {
            const updateEmployee = {
                ...editingEmployee,

                name: name,
                email: email,
                role: role,
                experience: experience,
                skills: skills,
                city: city,
            };
            onUpdateEmployee(updateEmployee);

            return;
        }

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

        clearForm();
        // setName("");
        // setEmail("");
        // setRole("");
        // setCity("");
    };

    return (
        <div className="employee-form">

            <h2> {editingEmployee
                ? "Edit Employee"
                : "Add Employee"}</h2>

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
                        Experience
                    </label>
                    <input
                        type="text"
                        value={experience}
                        onChange={(e) =>
                            setExperience(e.target.value)
                        }
                        placeholder="Enter employee experience"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>
                        Skills
                    </label>
                    <input
                        type="text"
                        value={skills}
                        onChange={(e) =>
                            setSkills(e.target.value)
                        }
                        placeholder="Enter employee skills"
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

                {/* Buttons */}

                <div className="form-buttons">
                    <button type="submit" className="add-employee-button">
                        {editingEmployee
                            ? "Update Employee"
                            : "Add Employee"}
                    </button>

                    {editingEmployee && (
                        <button type="button" className="cancel-button" onClick={onCancelEdit}>
                            Cancel
                        </button>  
                    )}
                </div>
            </form>
        </div>
    );
}
export default EmployeeForm;