const { DataTypes } = require('sequelize');
//// esto es el modelo de temperamento y va a db


// Modelo "Temperament"
module.exports = (sequelize) => {
    const Temperament = sequelize.define('Temperament', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Temperament;
  };


