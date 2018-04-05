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

router.get('/schools-add', function(req, res, next) { //Додати    
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
                Adress: req.body.SchoolAdress,
                Contacts: req.body.SchoolContacts,
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
router.get('/schools-edit/:id', function(req, res) { //редагувати  
    School.findById(req.params.id, function(err, schools) {
        if (err) {
            //console.log(res);
            console.error(err);
            res.render('admin/School-res', { title: 'Error', message: err });
        } else {
            res.render('admin/schools-edit', {
                layout: 'admin/layout',
                title: 'Delete School',
                schools: schools
            });
        }
    });
});

router.post('/schools-edit/:id', function(req, res) { //Результат redagyvanna країни 
    School.remove({_id: req.params.id }, function(err) {
        if (err) {                        
            console.error(err);
            res.render('admin/School-res', { title: 'Error', message: err });
        } else {
            School.remove({_id: req.params.id});
            School.create({                
                Name: req.body.SchoolName,
                Adress: req.body.SchoolAdress,
                Contacts: req.body.SchoolContacts,
            }, function(err, School) {
                if (err) {
                    console.error('Error: ' + err);
                    res.render('admin/School-res', { title: 'Error І', message: err });
                } else
                    res.render('admin/School-res', {
                        title: 'Super: ',
                        message: 'School edit succesfully'
                    });
            });
        }
    });
});

router.get('/schools-delete/:id', function(req, res, next) { //Видалити     
    School.findById(req.params.id, function(err, schools) {
        if (err) {
            //console.log(res);
            console.error(err);
            res.render('admin/School-res', { title: 'Error', message: err });
        } else {
            res.render('admin/schools-delete', {
                layout: 'admin/layout',
                title: 'Delete School',
                schools: schools
            });
        }
    });
});

router.post('/schools-delete/:id', function(req, res) { //Результат додавання країни 
    School.remove({ _id: req.params.id }, function(err) {
        if (err) {                                   
            //console.log(req.params);
            console.error(err);
              res.render('admin/School-res', { title: 'Error', message: err });
        } else {           
            School.remove({
                _id: req.params.id  ,          
            }, function(err, School) {
                if (err) {
                    console.error('Error: ' + err);
                    res.render('admin/School-res', { title: 'Error І', message: err });
                } else
                    res.render('admin/School-res', {
                        title: 'Super: ',
                        message: 'School delete succesfully'
                    });
            });
         }
    });
});

module.exports = router;