<<<<<<< HEAD
import {displayHomePage, displayCaloriesPage, displayRemainingPage, displayLoginPage, displayDownloadPage} from '../Controllers/index.controllers.server.js'
=======
import {displayHomePage, displayAboutPage, displayContactPage, displayDownloadPage} from '../Controllers/index.controllers.server.js'
>>>>>>> b7f64198274cdd0369cf9a0715acd7686fb9c32d
import { Router } from "express";


const router = Router(); // I am initializing the router function.

// app.use('/')
router.get('/', displayHomePage);
<<<<<<< HEAD
router.get('/calories', displayCaloriesPage);
router.get('/remaining', displayRemainingPage);
router.get('/login', displayLoginPage);
=======
router.get('/contactus', displayContactPage);
router.get('/about', displayAboutPage);
>>>>>>> b7f64198274cdd0369cf9a0715acd7686fb9c32d
router.get('/download', displayDownloadPage);



export default router;