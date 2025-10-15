import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SimpleReactForm({data,setData}) {

//   const [data, setData] = useState(null);
   const navigate= useNavigate()
  const [form, setForm] = useState({
    
    name: "",
    email: "",
    password: "",

  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formdata", JSON.stringify(form));
    setData(form);
    setForm({ name: "", email: "", password: "" });
    navigate("/home2")

  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button type="submit" style={{ padding: "8px 16px" }}>
          Submit
        </button>
      </form>

      <div>
        {data && (
          <>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.password}</p>
          </>
        )}
      </div>
    </div>
  );
}
