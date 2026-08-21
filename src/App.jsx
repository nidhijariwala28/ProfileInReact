// import profileImg from "./assets/nidhi.jpeg"
// function App() {
//   const name = "Nidhi Jariwala";
//   const role = "Laravel Developer";
//   const city = "Surat";
//   const age = 22;

//   return (
//     <div className="container">
//       <div className="card">
//         <img src={profileImg} alt="Profile" />
//         <h1>{name}</h1>
//         <p className="age">{age}</p>
//         <p className="role">{role}</p>
//         <p className="city">📍 {city}</p>
//         <button>View Portfolio</button>
//       </div>
//     </div>
//   )
// }
// export default App;

// import ProfileCard  from "./components/ProfileCard";

// function App(){
//   return(
//     <div className="container">
//       <ProfileCard />
//     </div>
//   );
// }
// export default App;

// import "./index.css";
// import ProfileCard from "./components/ProfileCard";
// import nidhi from "./assets/nidhi.jpeg";
// import rahul from "./assets/rahul.jpeg";
// import priya from "./assets/priya.jpeg";

// function App() {
//   return (
//     <div className="container">
//       <ProfileCard
//         image={nidhi}
//         name="Nidhi Jariwala"
//         role="PHP Laravel Developer"
//         experience="1.8 Years"
//         skills="React, MySql"
//         city="Surat"
//         isAvailable={true}
//         buttonColor="#2563eb"
//       />
//       <ProfileCard
//         image={rahul}
//         name="Rahul Sharma"
//         role="React Developer"
//         experience="1 Year"
//         skills="React, MySql, MongoDB"
//         city="Ahmedabad"
//         isAvailable={false}
//         buttonColor="#16a34a"
//       />
//       <ProfileCard
//         image={priya}
//         name="Priya Patel"
//         role="UI Designer"
//         experience="3 Years"
//         skills="Canva, Photoshop"
//         city="Vadodara"
//         isAvailable={true}
//         buttonColor="#9333ea"
//       />
//     </div>
//   );
// }
// export default App;

import "./index.css";
import ProfileCard from "./components/ProfileCard";

import nidhi from "./assets/nidhi.jpeg"
import rahul from "./assets/rahul.jpeg"
import priya from "./assets/priya.jpeg"

const employees = [
  {
    id: 1,
    image: nidhi,
    name: "Nidhi Jariwala",
    role: "PHP Laravel Developer",
    experience: "1.8 Years",
    skills: "React, MySql",
    city: "Surat",
    isAvailable: true,
    buttonColor: "#2563eb",
  },
  {
    id: 2,
    image: rahul,
    name: "Rahul Sharma",
    role: "React Developer",
    experience: "1 Year",
    skills: "React, MySql, MongoDB",
    city: "Ahmedabad",
    isAvailable: false,
    buttonColor: "#16a34a",
  },
  {
    id: 3,
    image: priya,
    name: "Priya Patel",
    role: "UI Designer",
    experience: "3 Years",
    skills: "Canva, Photoshop",
    city: "Vadodara",
    isAvailable: true,
    buttonColor: "#9333ea",
  },
]

function App() {
  return (
    <div className="container">
      {employees.map((employee) => (
        <ProfileCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}
export default App;