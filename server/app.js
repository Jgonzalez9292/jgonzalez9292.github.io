const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors'); //Import the cors package

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

// Configure the transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // or another email service provider
    auth: {
        user: 'jgonzalezz9292@gmail.com', // your email address
        pass: 'wkfm qohp tjmw obiq'   // your email password or app password
    }
});

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use CORS middleware
app.use(cors({
	origin: 'https://jgonzalez9292.github.io' //Allow requests from my GitHub Pages site
}));

// Route to handle form submission
app.post('/', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received form data: Name=${name}, Email=${email}, Message=${message}`); //Log form data

    if (!name || !email || !message){
        console.log("All fields are required");
        return res.status(400).send("All fields are required");
    }

    const mailOptions = {
        from: email,
        to: 'jgonzalezz9292@gmail.com',
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); // Log the error details
            res.status(500).send(`Something went wrong: ${error.message}`); // Send more detailed error message to client
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully!');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

