import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";
import "./App.css";

function App() {
  const employees = [
    {
      id: 1,
      name: "Aino Virtanen",
      title: "HR Manager",
      salary: 4200,
      phone: "040-1234567",
      email: "aino.virtanen@example.com",
      animal: "Owl",
      startDate: "2018-04-01",
      location: "Helsinki",
      department: "Human Resources",
      skills: ["Recruiting", "Communication", "Employee Relations"],
    },
    {
      id: 2,
      name: "Mikko Laine",
      title: "Software Developer",
      salary: 5100,
      phone: "045-2233445",
      email: "mikko.laine@example.com",
      animal: "Dog",
      startDate: "2024-09-01",
      location: "Espoo",
      department: "IT",
      skills: ["JavaScript", "React", "Node.js"],
    },
    {
      id: 3,
      name: "Laura Nieminen",
      title: "UX Designer",
      salary: 4800,
      phone: "040-5566778",
      email: "laura.nieminen@example.com",
      animal: "Cat",
      startDate: "2015-10-01",
      location: "Tampere",
      department: "Design",
      skills: ["UI/UX", "Prototyping", "Figma"],
    },
    {
      id: 4,
      name: "Pekka Korhonen",
      title: "Project Manager",
      salary: 6000,
      phone: "040-6677889",
      email: "pekka.korhonen@example.com",
      animal: "Fox",
      startDate: "2020-02-01",
      location: "Vantaa",
      department: "Management",
      skills: ["Leadership", "Budgeting", "Scrum"],
    },
    {
      id: 5,
      name: "Sari Lehtonen",
      title: "QA Engineer",
      salary: 4500,
      phone: "040-5566771",
      email: "sari.lehtonen@example.com",
      animal: "Rabbit",
      startDate: "2013-09-01",
      location: "Helsinki",
      department: "Quality Assurance",
      skills: ["Testing", "Automation", "Selenium"],
    },
    {
      id: 6,
      name: "Timo Virtanen",
      title: "Data Analyst",
      salary: 4700,
      phone: "040-6677881",
      email: "timo.virtanen@example.com",
      animal: "Elephant",
      startDate: "2023-11-01",
      location: "Turku",
      department: "Analytics",
      skills: ["SQL", "Power BI", "Python"],
    },
    {
      id: 7,
      name: "Kaisa Saarinen",
      title: "Marketing Specialist",
      salary: 4000,
      phone: "045-3344556",
      email: "kaisa.saarinen@example.com",
      animal: "Cat",
      startDate: "2010-05-01",
      location: "Helsinki",
      department: "Marketing",
      skills: ["SEO", "Social Media", "Copywriting"],
    },
    {
      id: 8,
      name: "Jari Mäkinen",
      title: "Intern",
      salary: 2300,
      phone: "050-1122334",
      email: "jari.makinen@example.com",
      animal: "Dog",
      startDate: "2025-07-01",
      location: "Espoo",
      department: "IT",
      skills: ["HTML", "CSS", "React Basics"],
    },
    {
      id: 9,
      name: "Heli Peltola",
      title: "Accountant",
      salary: 3900,
      phone: "040-1122335",
      email: "heli.peltola@example.com",
      animal: "Owl",
      startDate: "2010-04-01",
      location: "Helsinki",
      department: "Finance",
      skills: ["Accounting", "Excel", "SAP"],
    },
    {
      id: 10,
      name: "Eero Niemi",
      title: "Support Engineer",
      salary: 3600,
      phone: "040-2233445",
      email: "eero.niemi@example.com",
      animal: "Lion",
      startDate: "2021-01-01",
      location: "Tampere",
      department: "Support",
      skills: ["Customer Service", "Troubleshooting", "Networking"],
    },
  ];

  return (
    <div className="App">
      <Header />
      <PersonList employees={employees} />
      <Footer />
    </div>
  );
}

export default App;

