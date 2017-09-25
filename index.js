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
		name: "session1",
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
	var favfood = req.cookies["favfood"];
	var favcolor = req.cookies["favcolor"];
	var goodevil = req.cookies["goodevil"];
	var insanity = req.cookies["insanity"];
	console.log("cookies ", req.cookies);
	res.render("index", { favfood, favcolor, goodevil, insanity });
});

app.post("/page", (req, res) => {
	res.cookie("favfood", req.body.favfood);
	res.cookie("favcolor", req.body.favcolor);
	res.cookie("goodevil", req.body.goodevil);
	res.cookie("insanity", req.body.insanity);
	console.log("req.body ", req.body);
	res.redirect("back");
});

app.listen(3000, () => {
	console.log("listening on localhost3000");
});
