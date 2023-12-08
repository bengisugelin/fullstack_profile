import React, { useState } from 'react';
import axios from 'axios';

export default function CreatePerson() {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [age, setAge] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const personData = {
      firstname: firstname,
      lastname: lastname,
      age: age
    };

    axios
      .post('http://localhost:8800/api/persons/add', personData)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    <div>

      <h3>Create New Person</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>First Name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />

            <label>Last Name: </label>
           <input
            type="text"
            required
            className="form-control"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />

          <label>Age: </label>
          <input
            type="number"
            required
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

        </div>
        <br></br>

        <div className="form-group">
          <input
            type="submit"
            value="Create Person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}