import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// Pagina estatica
app.use(express.static('../frontend'));


app.server.listen(process.env.PORT || 3000, () => {
    console.log(`Started on port ${app.server.address().port}`);
});
