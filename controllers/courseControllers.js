
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

}

const deleteCourse = async (req, res) => {
    let id = req.params.id
    await Course.destroy({ where: {id: id}})
    res.send('course is deleted')
}

const viewAllCourses = async(req, res) =>{
    const courses = await Course.findAll()
    res.render('course',{courses:courses})
  
}

const displayForm = async(req,res) => {

    let id = req.params.id

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



