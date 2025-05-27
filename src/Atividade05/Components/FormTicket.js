import { useState } from 'react';

export default function FormTicket() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        setFullName(e.target.value + ' ' + lastName);
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value);
        setFullName(firstName + ' ' + e.target.value);
    }

    return (
        <>
            <h2>Let's check you in</h2>
            <label>First Name: {' '}</label>
            <input value={firstName} onChange={handleFirstNameChange}/>
            <label>Last Name: {' '}</label>
            <input value={lastName} onChange={handleLastNameChange}/>
            <br/>
            <p>Your ticket will be issued to: <b>{fullName}</b></p>
        </>
    );
}