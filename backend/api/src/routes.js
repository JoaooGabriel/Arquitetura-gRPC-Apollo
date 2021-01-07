const { Router } = require('express');

const UserController = require('./controllers/UserController');

const CompanyController = require('./controllers/CompanyController');

const ProvaController = require('./controllers/ProvaController');

const router = Router();

router.post('/prova', ProvaController.store);

router.post('/users', UserController.store);
router.get('/users/:id', UserController.show);

router.post('/companys', CompanyController.store);
router.get('/companys/:id', CompanyController.show);

module.exports = router;