// import profileImg from "../assets/nidhi.jpeg"

// function ProfileCard() {
//     const experience = "1.8 Years";

//     return (
//         <div className="card">
//             <img src={profileImg} alt="Profile" />
//             <h1>Nidhi Jariwala</h1>
//             <p className="role">PHP Laravel Developer</p>
//             <p className="experience">{experience}</p>
//             <p className="city">📍 Surat</p>
//             <button>View Portfolio</button>
//             <button className="btn-success"> Download Resume</button>
//         </div>
//     );
// }
// export default ProfileCard;

// function ProfileCard({
//     image,
//     name,
//     role,
//     experience,
//     skills,
//     city,
//     buttonColor,
//     isAvailable,
// }) {
//     return (<div className="card">
//         <img src={image} alt={name} />
//         <h1>{name}</h1>
//         <p className="role">{role}</p>
//         <p className="experience">{experience}</p>
//         <p className="skills">{skills}</p>
//         <p className="city">{city}</p>
//         <p
//             className="status"
//             style={{ color: isAvailable ? "green" : "red" }}
//         >
//             {isAvailable ? "🟢 Available" : "🔴 Not Available"}
//         </p>
//         <button style={{ backgroundColor: buttonColor }}>
//             View Profile
//         </button>
//     </div>
//     );
// }
// export default ProfileCard;

import { useState } from "react";

function ProfileCard({
    employee,
    onDeleteEmployee,
    onEditEmployee,
    onViewProfile,
    onToggleAvailability,
}) {

    const {
        image,
        name,
        email,
        role,
        experience,
        skills,
        city,
        isAvailable,
        buttonColor,
    } = employee;

    const [isFavorite, setIsFavorite] =
        useState(false);

    const handleEdit = () => {
        onEditEmployee(employee);
    };

    const handleDelete = () => {
        onDeleteEmployee(employee.id);
    };

    const handleAvailability = () => {
        onToggleAvailability(employee.id);
    };

    return (
        <div className="card">
            <img
                src={image}
                alt={name}
                className="profile-image"
            />

            <h1>
                {name}
            </h1>

            <p className="email">
                {email}
            </p>

            <p className="role">
                {role}
            </p>

            <p className="experience">
                {experience}
            </p>

            <p className="skills">
                {skills}
            </p>

            <p className="city">
                📍 {city}
            </p>

            <p
                className={
                    isAvailable
                        ? "available"
                        : "not-available"
                }
            >
                {isAvailable
                    ? "🟢 Available"
                    : "🔴 Not Available"}

            </p>

            <button
                className="profile-button"
                style={{
                    backgroundColor:
                        buttonColor,
                }}
                onClick={() =>
                    onViewProfile(employee)
                }
            >
                View Profile
            </button>

            <button
                className="favorite-button"
                onClick={() =>
                    setIsFavorite(
                        !isFavorite
                    )
                }
            >
                {isFavorite
                    ? "❤️ Favorited"
                    : "🤍 Add Favorite"}

            </button>

            <button
                className="availability-button"
                onClick={
                    handleAvailability
                }
            >
                Change Availability
            </button>

            <button
                className="edit-button"
                onClick={handleEdit}
            >
                ✏️ Edit Employee
            </button>

            <button
                className="delete-button"
                onClick={handleDelete}
            >
                Delete Employee
            </button>

        </div>

    );
}

export default ProfileCard;