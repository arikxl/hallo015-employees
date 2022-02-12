import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from './Modal';

const AddEmployeeStyled = styled.section`
    padding-top: 100px;
    width :70%;
    margin-bottom: 30px !important;

    h1{
        margin-bottom: 20px;
    }
    .inputs-container{
        margin-bottom: 20px;
        display: flex ;
        justify-content: space-between;

        label {
            margin-left: 20px ;
        }
        input {
            padding-left: 5px;
        }
    }

    button {
        background-color: green;
        color: yellow;
        border: none;
        width: 150px;
        border-radius:5px;
        padding: 5px 0;
        font-size: 1rem;
        font-weight: bold;
    }

    button:hover {
        background-color: yellow;
        color: red;
    }

  @media (max-width: 444px){
    width:90%;
    
    .inputs-container {
        flex-direction: column;
    }
  }
`;

const AddEmployee = () => {

    const [newEmployee, setNewEmployee] = useState({
        name: '',
        position: '',
        salary: '',
    });

    const [showModal, setShowModal] = useState(false);

    const addEmployee = () => {
        if (newEmployee.name.length < 3) return;
        postEmployeeToSql()
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            setNewEmployee({
                name: '',
                position: '',
                salary: '',
            })
        }, 8000);
    }

    const postEmployeeToSql = () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: newEmployee.name,
                position: newEmployee.position,
                salary: newEmployee.salary
            })
        };
        fetch('https://hallo015employees.herokuapp.com/create', requestOptions)
    }

    return (
        <AddEmployeeStyled className="section">
            <h1>Add a New Employee</h1>

            <div className="inputs-container">
                {/* לא הצלחתי להעביר את כל הערכים חזרה.אסביר בפירוט */}
                {/* {Object.keys(newEmployee).map((key, index) => (
                    <Input key={index} value={key}
                    setNewEmployee={setNewEmployee}
                    newEmployee={newEmployee} />
                ))}  */}


                <div className="flex space-between">
                    <label >Name: </label>
                    <input type="text" value={newEmployee.name}
                        onChange={(e) => {
                            setNewEmployee({ ...newEmployee, name: e.target.value });
                        }} />
                </div>
                <div className="flex space-between">
                    <label >Salary: </label>
                    <input type="number" min={1} value={newEmployee.salary}
                        onChange={(e) => {
                            setNewEmployee({ ...newEmployee, salary: e.target.value });
                        }} />
                </div>
                <div className="flex space-between">
                    <label >Position: </label>
                    <input type="text" value={newEmployee.position}
                        onChange={(e) => {
                            setNewEmployee({ ...newEmployee, position: e.target.value })
                        }} />
                </div>
            </div >
            <button onClick={addEmployee}>
                Hire Her/Him!
            </button>
            {
                showModal && (
                    <Modal newEmployee={newEmployee} />
                )
            }
        </AddEmployeeStyled>
    );
};

export default AddEmployee