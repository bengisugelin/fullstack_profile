import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Person = (props) => (
  <tr className="d-flex">
    <td className="col-2">{props.person}</td>
    <td className="col-2"> {props.firstname} </td>
    <td className="col-2"> {props.lastname}</td>
    <td className="col-2" > {props.age}</td>
    <td className="col-2" style={{ textAlign: 'left' }}>
      <button  onClick={() => {props.editPerson(props.keyt); }} > Edit  </button>
      {'  '}
      <button onClick={() => { props.deletePerson(props.keyt); }}> delete </button>
    </td>
  </tr>
);

export default function PersonList() {
  const [persons, setPersonList] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8800/api/persons/')
      .then((response) => {
        setPersonList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deletePerson = (id) => {
    axios
      .delete('http://localhost:8800/api/persons/delete/' + id)
      .then((response) => {
        console.log(response.data);
      });

      setPersonList(persons.filter((el) => el._id !== id));
  };

  const editPerson = (id) => {
    window.location = '/update/' + id;
  };

  return (
    <div>
      <h3>Logged Persons</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Person</th> 
            
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => {
            return (
              <Person
                firstname={person.firstname}
                lastname={person.lastname}
                age={person.age}
                key={person._id}
                keyt={person._id}
                deletePerson={deletePerson}
                editPerson={editPerson}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}