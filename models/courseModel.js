

module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('course', {
        id:{
            type: DataTypes.INTEGER,
          
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fees: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Course;
}