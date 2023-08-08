const { DataTypes } = require('sequelize');
// esto es el modelo de dog y va a db

  module.exports = (sequelize) => {
    const Dog = sequelize.define('Dog', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      yearsOfLife: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    createdInDB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    timestamps: false
  });
  
    return Dog;
  };


    // Exportamos una funcion que define el modelo
    // Luego le injectamos la conexion a sequelize.
    // module.exports = (sequelize) => {
    //   // defino el modelo
    //   sequelize.define('dog', {
    //     name: {
    //       type: DataTypes.STRING,
    //       allowNull: false,
    //     },
    //   });
    // };
    // Modelo "Dog"   esto va a ser importado en db