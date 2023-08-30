import express from "express"; 
import router from './App/Routes/index.routes.server.js' 
import logger from "morgan";
import session from "express-session";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import archiver from "archiver"; // Add this line to import the archiver module
import cors from 'cors';


// Instantiate Express Application
const app = express();

//ES MODULES FIX FOR __DIRNAME
import { fileURLToPath } from "url";
import path, {dirname} from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));


//Setting up views Middlewares
app.set('view engine', "ejs");
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.set('views', path.join(__dirname, '/app/Views'));

app.use(cors());

//More Middlewares
app.use(express.static(path.join(__dirname,'/public'))); //Here we are saying that everything under public folder are static files, which means they are on the client side.
app.use(session({
                 secret: 'Mysecret',
                 saveUninitialized: false,
                 resave: false
               }))



// Define the folder to be downloaded
const folderPath = path.join(__dirname, '/wpf'); 

// Download folder API endpoint
app.get('/api/Installer', async (req, res) => {
  try {
    // Create a zip archive
    const archive = archiver('zip', { zlib: { level: 9 } });

    // Pipe the archive to the response
    archive.pipe(res);
    archive.directory(folderPath, false);

    // Finalize the archive
    await archive.finalize();
  } catch (error) {
    console.error('Error creating archive:', error);
    res.status(500).send('Internal server error');
  }
});



app.use('/', router); 
app.listen(3000);
