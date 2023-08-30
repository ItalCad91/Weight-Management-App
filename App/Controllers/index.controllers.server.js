export function displayHomePage(req, res, next) 
{
    res.render('index', {title : 'DBMS Desktop App', page:'home'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};


export function displayAboutPage(req, res, next) 
{
    res.render('index', {title : 'DBMS Desktop App - About', page:'about'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};

export function displayContactPage(req, res, next) 
{
    res.render('index', {title : 'DBMS Desktop App - Contact Us', page:'contactus'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};

export function displayDownloadPage(req, res, next) 
{
<<<<<<< HEAD
    res.render('index', {title : 'Weight Management App Login', page:'login'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};

export function displayDownloadPage(req, res, next) 
{
    res.render('index', {title : 'Weight Management App Download', page:'download'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
=======
    res.render('index', {title : 'DBMS Desktop App - Download', page:'download'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
>>>>>>> b7f64198274cdd0369cf9a0715acd7686fb9c32d
};