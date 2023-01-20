module.exports = {
    host: 'localhost',
    user: 'root',
    password: 'Ztlab@98',
    db: 'course_management',
    dialect: 'mysql',
    
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}