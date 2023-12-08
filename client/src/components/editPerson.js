import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditPerson() {
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];



  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [age, setAge] = useState('');


  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/persons/${id}`)
      .then((response) => {
        const personData = response.data;
        setfirstname(personData.firstname);
        setlastname(personData.lastname);
        setAge(personData.age);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    const personData = {
      firstname: firstname,
      lastname: lastname,
      age: age,
    };


    axios
      .put(`http://localhost:8800/api/persons/update/${id}`, personData)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    <div>
      <h3>Create New Person</h3>
      <h3>Update Person</h3>
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
        </div>
        <div className="form-group">
          <label>Last Name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input
            type="number"
            required
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
 
        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Book"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}