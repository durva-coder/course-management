// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({extended: false});
// const { Course } = require('../models');
const { courses } = require('../models');
const db = require('../models');

// create Main Model
const Course = db.courses;

const viewAddCourses = async(req, res) =>{
    res.render('addCourses')
}

const addCourses = async(req, res) => {
    const { name, duration, fees } = req.body;
    const courses = await Course.create({name, duration, fees})
    res.render('addCourses',{courses:courses})
}

const updateOneCourse = async (req, res) => {
    let id = req.params.id;
    const data = req.body;
    console.log(`This is id Of Find One Course ${id}`);
    let courses = await Course.update(data, { where: {id: id}})
    res.render('course',{courses:courses})
    // res.send(courses)
}

const deleteCourse = async (req, res) => {
    let id = req.params.id
    await Course.destroy({ where: {id: id}})
    res.send('course is deleted')
}

const viewAllCourses = async(req, res) =>{
    const courses = await Course.findAll()
    res.render('course',{courses:courses})
    // res.send(courses)
}

const displayForm = async(req,res) => {
    // console.log("fdsfgdg")
    let id = req.params.id
    // console.log(id)
    const courses = await Course.findOne({where: {id:id}})
    res.render('updateForm', {courses:courses});
}


module.exports = {
    addCourses,
    updateOneCourse,
    deleteCourse,
    viewAllCourses,
    viewAddCourses,
    displayForm
}

// var data = [ 
//     {
//         id: 1,
//         courseName: 'c programming',
//         courseDuration: '3 months',
//         courseFees: '600'
//     },
//     {
//         id: 2,
//         courseName: 'c++ programming',
//         courseDuration: '3.5 months',
//         courseFees: '500'
//     }

// ];

// module.exports = function(app){
//     app.get('/course', function(req, res){
//         res.render('course', {courses: data});
//     });
    
    
//     // app.post('/course', urlencodedParser, function(req, res){
//     app.post('/course', function(req, res){
        
//         data.push(req.body);
//         res.json(data);
//         // res.render('course', {courses: data});
//     });
    
//     app.delete('/course/:id', function(req, res){
//         const idToDelete = parseInt(req.params.id);
//         data = data.filter(function(course){
//             return course.id !== idToDelete;

//         });
//         console.log(data);
//         res.send('deleted');
//         // res.json(data);
//     });

//     app.get('/addCourses', function(req, res){
//         res.render('addCourses');
//     });
// } 


