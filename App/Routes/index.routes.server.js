import {displayHomePage, displayCaloriesPage, displayRemainingPage, displayLoginPage, displayDownloadPage} from '../Controllers/index.controllers.server.js'
import { Router } from "express";


const router = Router(); // I am initializing the router function.

// app.use('/')
router.get('/', displayHomePage);
router.get('/calories', displayCaloriesPage);
router.get('/remaining', displayRemainingPage);
router.get('/login', displayLoginPage);
router.get('/download', displayDownloadPage);



export default router;