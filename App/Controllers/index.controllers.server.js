export function displayHomePage(req, res, next) 
{
    res.render('index', {title : 'Weight Management App', page:'home'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};


export function displayCaloriesPage(req, res, next) 
{
    res.render('index', {title : 'Weight Management App', page:'calories'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};

export function displayRemainingPage(req, res, next) 
{
    res.render('index', {title : 'Weight Management App', page:'remaining'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};

export function displayLoginPage(req, res, next) 
{
    res.render('index', {title : 'Weight Management App Login', page:'login'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};

export function displayDownloadPage(req, res, next) 
{
    res.render('index', {title : 'Weight Management App Download', page:'download'}); // RENDERS IN THE EJS TEMPLATE CALLED INDEX
};