import React, { useState } from 'react';

function App() {
  // Estado inicial de los usuarios
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Crear un nuevo usuario
  const handleAddUser = () => {
    if (name === '') return; // Validar que no esté vacío
    if (isEditing) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = { name };
      setUsers(updatedUsers);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setUsers([...users, { name }]);
    }
    setName(''); // Limpiar el input
  };

  // Editar un usuario
  const handleEditUser = (index) => {
    setName(users[index].name);
    setEditingIndex(index);
    setIsEditing(true);
  };

  // Eliminar un usuario
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>CRUD Básico en React</h1>

      {/* Formulario para agregar o editar usuario */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del usuario"
      />
      <button onClick={handleAddUser}>
        {isEditing ? 'Actualizar Usuario' : 'Agregar Usuario'}
      </button>

      {/* Lista de usuarios */}
      <h2>Lista de Usuarios</h2>
      {users.length === 0 ? (
        <p>No hay usuarios.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name}
              <button onClick={() => handleEditUser(index)} style={{ marginLeft: '10px' }}>Editar</button>
              <button onClick={() => handleDeleteUser(index)} style={{ marginLeft: '10px' }}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
