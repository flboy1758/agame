import * as express from "express";


const port = process.env.PORT || 80;
let app = express();
app.use(express.static(__dirname + '/public'));
app.use(function (req: any, res: any) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, (err: any) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
});
