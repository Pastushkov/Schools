var express = require('express');
var router = express.Router();
var School = require('../models/school');
/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'SchoolsSTART' });
    res.render('index', { title: 'Ajax Demo', layout: 'layout1' });
});

/* GET schools page. */
router.get('/schools', function(req, res, next) {
    res.render('index', { title: 'Ajax Demo', layout: 'layout1' });
});

router.get("/setup-db", function(req, res) {

    var schools = [{
            Name: "Спеціалізована ЗОШ № 1",
            Adress: "вул. Польский ринок, 6",
            Contacts: "(03849) 2-15-13"
        },
        {
            Name: "ЗОШ № 2 імені Т.Г.Шевченка",
            Adress: "вул. Кн.Коріатовичів, 2",
            Contacts: "(03849) 5-16-46"
        },
        {
            Name: "Навчально-виховний комплекс № 3",
            Adress: "вул. Панівецька, 11",
            Contacts: "(03849) 5-16-80"
        },
        {
            Name: "Спеціалізована ЗОШ № 5",
            Adress: "вул. Л.Українки, 59 ",
            Contacts: "(03849) 2-37-22"
        },
        {
            Name: "ЗОШ I-III ступеня № 6",
            Adress: "вул. Молодіжна, 5",
            Contacts: "(03849) 7-10-90, 7-17-62"
        },
        {
            Name: "ЗОШ I-III ступеня № 7",
            Adress: "вул. Жукова, 27",
            Contacts: "(03849) 4-35-24"
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