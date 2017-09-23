const app = require("express")();

//for body parsing
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//session cookies
var cookieSession = require("cookie-session");
app.use(
	cookieSession({
		name: "session",
		keys: ["123456789abcefgh"]
	})
);

//handlebars
const exphbs = require("express-handlebars");
app.engine(
	"handlebars",
	exphbs({
		defaultLayout: "main",
		partialsDir: "views/"
	})
);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
	res.end("yo");
});

app.listen(3000, () => {
	console.log("listening on localhost3000");
});
