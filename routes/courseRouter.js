const { render } = require('ejs')
const courseControllers = require('../controllers/courseControllers.js')

const router = require('express').Router()

router.get('/viewAddCourse' ,courseControllers.viewAddCourses)

router.post('/addCourses',courseControllers.addCourses)

router.get('/viewAllCourses', courseControllers.viewAllCourses)

// BUY ID
router.put('/update/:id', courseControllers.updateOneCourse)

router.delete('/:id', courseControllers.deleteCourse)

router.get('/displayForm/:id',courseControllers.displayForm);

module.exports = router
