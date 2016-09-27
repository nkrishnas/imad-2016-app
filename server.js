var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title : 'Article One',
    date : 'Sep 26 2016',
    heading: 'Article One',
    content : `  <p>
                This is the first article content. This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.
            </p>
            
            <p>
                This is the first article content second paragraph. This is the first article content second paragraph. This is the first article content second paragraph. This is the first article content second paragraph. This is the first article content second paragraph. This is the first article content second paragraph. This is the first article content second paragraph. This is the first article content second paragraph. 
                </p>`
};

function createTemplate(data){
    
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
            ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr>
            <div>
                ${heading}
            </div>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
            </div>
        </body>
    </html>
    `;

}

var counter = 0;
app.get('/', function (req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/counter', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-Two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-Three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
