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

import { useState } from "react";

import "./index.css";

import ProfileCard from "./components/ProfileCard";
import Counter from "./components/counter";
import EmployeeForm from "./components/EmployeeForm";

import nidhi from "./assets/nidhi.jpeg"
import rahul from "./assets/rahul.jpeg"
import priya from "./assets/priya.jpeg"
import amit from "./assets/amit.jpeg"

const initialEmployees = [
  {
    id: 1,
    image: nidhi,
    name: "Nidhi Jariwala",
    email: "jariwalanidhi28@gmail.com",
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
    email: "rahul@gmail.com",
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
    email: "priya@gmail.com",
    role: "UI Designer",
    experience: "3 Years",
    skills: "Canva, Photoshop",
    city: "Vadodara",
    isAvailable: true,
    buttonColor: "#9333ea",
  },
  {
    id: 4,
    image: amit,
    name: "Amit Shah",
    email: "amit@gmail.com",
    role: "Node.js Developer",
    experience: "6 Months",
    skills: "React, MongoDB, Express.js",
    city: "Rajkot",
    isAvailable: true,
    buttonColor: "#eb2525",
  },
]

function App() {

  const [employees, setEmployees] = useState(initialEmployees);

  const [search, setSearch] = useState("");

  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleAddEmployee = (newEmployee) => {
    setEmployees((previousEmployees) => [
      ...previousEmployees,
      newEmployee
    ]);
  };

  const handleDeleteEmployee = (employeeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (!confirmDelete) {
      return;
    }
    setEmployees((previousEmployees) =>
      previousEmployees.filter(
        (employee) => employee.id !== employeeId
      )
    );
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleUpdateEmployee = (updateEmployee) => {
    setEmployees((previousEmployees) =>
      previousEmployees.map((employee) =>
        employee.id === updateEmployee.id
          ? updateEmployee
          : employee
      )
    );
    setEditingEmployee(null);
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  const filteredEmployees = employees.filter((employee) => {
    const searchText = search.toLowerCase();
    return (
      employee.name
        .toLowerCase()
        .includes(searchText) ||

      employee.email
        .toLowerCase()
        .includes(searchText) ||

      employee.role
        .toLowerCase()
        .includes(searchText) ||

      employee.skills
        .toLowerCase()
        .includes(searchText) ||

      employee.city
        .toLowerCase()
        .includes(searchText)
    );
  });
  return (
    <div className="app">
      <h1 className="page-title">
        Employee Management
      </h1>

      {/* Counter */}
      <Counter />

      {/* Add employee form */}

      <EmployeeForm
        onAddEmployee={handleAddEmployee}
        editingEmployee={editingEmployee}
        onUpdateEmployee={handleUpdateEmployee}
        onCancelEdit={handleCancelEdit}

      />

      {/* search employee */}

      <div className="search-box">
        <h2> Search Employee</h2>
        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search by name, role, skills or city..."
        />
        <p className="search-result">
          {filteredEmployees.length} employee
          {filteredEmployees.length !== 1
            ? "s"
            : ""} found
        </p>
      </div>

      {/* Employee Cards */}
      <div className="container">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <ProfileCard
              key={employee.id}
              employee={employee}
              onDeleteEmployee={handleDeleteEmployee}
              onEditEmployee={handleEditEmployee}
            />
          ))
        ) : (
          <div className="no-result">
            <h2>No Employee Found</h2>
            <p>Try searching with another name, role or city</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;