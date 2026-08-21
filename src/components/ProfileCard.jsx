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

function ProfileCard({
    image,
    name,
    role,
    experience,
    skills,
    city,
    buttonColor,
    isAvailable,
}) {
    return (<div className="card">
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <p className="role">{role}</p>
        <p className="experience">{experience}</p>
        <p className="skills">{skills}</p>
        <p className="city">{city}</p>
        <p
            className="status"
            style={{ color: isAvailable ? "green" : "red" }}
        >
            {isAvailable ? "🟢 Available" : "🔴 Not Available"}
        </p>
        <button style={{ backgroundColor: buttonColor }}>
            View Profile
        </button>
    </div>
    );
}
export default ProfileCard;