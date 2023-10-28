import {displayHomePage, displayAboutPage,displayContactPage, displayThankYouPage, displayDownloadPage} from '../Controllers/index.controllers.server.js'

import { Router } from "express";


const router = Router(); // I am initializing the router function.

// app.use('/')

router.get('/about', displayAboutPage);
router.get('/contactus', displayContactPage);
router.get('/download', displayDownloadPage);
router.get('/', displayHomePage);
router.get('/login', displayThankYouPage);



export default router;