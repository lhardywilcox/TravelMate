const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "travel_app",
});

connection.connect((err) => {
	if (err) {
		console.error("Error connecting to the database: " + err.stack);
		return;
	}

	console.log("Connected to the database.");
});
