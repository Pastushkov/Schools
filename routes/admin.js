var express = require('express');
var router = express.Router();
var School = require('../models/school');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //Виводим меню адміна
    res.render('admin/index', {
        layout: 'admin/layout',
        title: 'Admin Panel'
    });
});

router.get('/schools', function(req, res, next) {
    School.find({}, function(err, schools) {
        if (err) {
            console.error('Error: ' + err);
            res.render('admin/School-res', {
                title: 'Error І',
                message: err
            });
        } else {
            res.render('admin/schools', {
                layout: 'admin/layout',
                title: 'Add School',
                schools: schools
            });
        }
    });
});

router.get('/schools-add', function(req, res, next) { //Додати країну    
    res.render('admin/schools-add', {
        layout: 'admin/layout',
        title: 'Add School'
    });
});

router.post('/schools-add', function(req, res) { //Результат додавання країни
    School.remove({ Name: req.body.SchoolName }, function(err) {
        if (err) {
            console.error(err);
            res.render('admin/School-res', { title: 'Error', message: err });
        } else {
            School.create({
                Name: req.body.SchoolName,
                Desc: req.body.SchoolDescription,
                Image: req.body.imageURL,
            }, function(err, School) {
                if (err) {
                    console.error('Error: ' + err);
                    res.render('admin/School-res', { title: 'Error І', message: err });
                } else
                    res.render('admin/School-res', {
                        title: 'Super: ',
                        message: 'School added to DB succesfully'
                    });
            });
        }
    });
});

module.exports = router;