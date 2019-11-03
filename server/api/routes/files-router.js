'use strict';

const express = require('express');

const filesController = require('../controllers/files-controller');

const router = express.Router();

router.get('/', filesController.fetchAll);
router.get('/:fileId', filesController.fetchOne);
router.get('/:fileId/download-link', filesController.fetchDownloadLink);

module.exports = router;
