import { useState, useEffect } from 'react';
import communicateWithDatabase from '../backendConnect';
import './userModule.css'; // Importuj plik CSS

function UserModule() {
    const [userData, setData] = useState(null);

    useEffect(() => {
        async function backend() {
            const result = await communicateWithDatabase();
            setData(result);
        }

        backend();
    }, []);

    const handleDelete = (index) => {
        // Usuwanie użytkownika z listy
        const newData = [...userData];
        newData.splice(index, 1);
        setData(newData);
    };

    const handleApprove = (index) => {
        // Zatwierdzanie użytkownika (zmiana koloru tła)
        const newData = [...userData];
        newData[index] = { ...newData[index], approved: true };
        setData(newData);
    };

    if (!userData) return null;

    return (
        <div>
            <div className="header">Na dzisiaj do zrobienia w firmie :</div>
            {userData.map((user, index) => (
                <div key={index} className={`user-container ${user.approved ? 'approved' : ''}`}>
                    <div className="button-container">
                        <button className="approve-button" onClick={() => handleApprove(index)}>✔</button>
                        <button className="delete-button" onClick={() => handleDelete(index)}>X</button>
                    </div>
                    <div className="user-details">
                        <div className="user-task">Zadanie: {user.task}</div>
                        <div className="user-name">Imię i nazwisko: {user.firstName} {user.lastName}</div>
                        <div className="user-email">Email: {user.email}</div>
                        <div className="user-username">Username: {user.username}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserModule;
