import React, { useState } from 'react';

const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.password===formData.confirmPassword){
        window.alert("REGISTRO CORRECTO")
    }else{
        window.alert("Las contraseñas no coinciden")}
  };

  
  
  return (
    <div>
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Nombre de usuario:</p>
          <input
            minLength={3}
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p>Correo Electrónico:</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p>Contraseña:</p>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p>Confirmar Contraseña:</p>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {(formData.password !== formData.confirmPassword) ? "Las contraseñas no coinciden" : null }
        <p></p>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default FormularioRegistro