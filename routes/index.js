var express = require('express');
var router = express.Router();
var School = require('../models/school');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET schools page. */
router.get('/schools', function(req, res, next) {
    res.render('schools', { title: 'Ajax Demo', layout: 'layout1' });    
});

router.get("/setup-db", function(req, res) {

    var schools = [
        {
            Name : "Спеціалізована ЗОШ № 1",
            Adress: "вул. Польский ринок, 6",
            Contacts: "(03849) 2-15-13"
        }
    ];

    School.remove({}, function(err) {
        if (err) {
            console.error(err);
        } else {

            for (let i = 0; i < schools.length; i++) {
                School.create(schools[i], function(err, School) {
                    if (err) console.error('Error: ' + err);
                    else console.log();
                });
            }
        }
    });
    res.status(200).json({
        message: "Okey",
    });

});
module.exports = router;