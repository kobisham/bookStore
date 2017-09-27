var express = require ('express');
var app = express();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

// Connect to mongoose
var promise = mongoose.connect('mongodb://localhost/bookstore', {
    useMongoClient: true,
    /* other options */
  });

var db = mongoose.connection;

app.get('/',function(req,res) {
    res.send('Please use /api/books or /api/genres');
});

// Get genres
app.get('/api/genres',function (req,res) {
    Genre.getGenres(function (err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres);
    })
})

// Add genre
app.post('/api/genres',function (req,res) {
    var genre = req.body;
    Genre.addGenre(genre,function (err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    })
});

// Get books
app.get('/api/books',function (req,res) {
    Book.getBooks(function (err, books) {
        if (err) {
            throw err;
        }
        res.json(books);
    })
})

// Get book by id
app.get('/api/books/:_id',function (req,res) {
    Book.getBookById(req.params._id, function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    })
});

// Add book
app.post('/api/books',function (req,res) {
    var book = req.body;
    Book.addBook(book,function (err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    })
});



app.listen(3000);
console.log('Running on port 3000');