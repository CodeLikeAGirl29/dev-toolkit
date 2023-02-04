# A. Node capstone LOGIN data flow based on the file structure


## 1. /public/index.html file
* in the html document there is a form
```html
<form class="login-form">
    <legend>Login</legend>
    <fieldset>
        <label for="loginUsername">Email</label>
        <input type="email" id="loginUsername" placeholder="OtisThePug@hotmail.com" value="paul.thomp@gmail.com">
        <label for="loginPassword">Password</label>
        <input type="password" id="loginPassword" placeholder="Lt_Fish1902" value="pass2018">
    </fieldset>
    <button type="submit" class="submit-button" id="login-button">Sign In</button>
    <span>Need to <button id="change-form-signup">Sign-up</button>?</span>
</form>
```





## 2. /public/client.js file
* in the client/js there are triggers for the button $("button-name").on("click", function(){  do stuff })
* in the client/js inside the triggers there is a ajax api call $.ajax()

```javascript
$(".login-form").submit(function (event) {
    event.preventDefault();

    //take the input from the user
    const username = $("#loginUsername").val();
    const password = $("#loginPassword").val();

    //validate the input
    if (username == "") {
        alert('Please input user name');
    } else if (password == "") {
        alert('Please input password');
    }
    //if the input is valid
    else {
        //create the payload object (what data we send to the api call)
        const loginUserObject = {
            username: username,
            password: password
        };
        //console.log(loginUserObject);

        //make the api call using the payload above
        $.ajax({
                type: 'POST',
                url: '/users/login',
                dataType: 'json',
                data: JSON.stringify(loginUserObject),
                contentType: 'application/json'
            })
            //if call is succefull
            .done(function (result) {
                console.log(result);
            })
            //if the call is failing
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };
});
```





## 3. /server.js file
* in the server.js there is an api endpoint app.get("/some-url"), req, res ....
* in the server.js in the api endpoint there is a Mongo code to connect to the Mongoose schema User.create()


```javascript
const User = require('./models/user');
```

```javascript
// signing in a user
app.post('/users/login', function (req, res) {

    //take the username and the password from the ajax api call
    const username = req.body.username;
    const password = req.body.password;

    //using the mongoose DB schema, connect to the database and the user with the same username as above
    User.findOne({
        username: username
    }, function (err, items) {

        //if the there is an error connecting to the DB
        if (err) {

            //display it
            return res.status(500).json({
                message: "Error connecting to the DB"
            });
        }

        // if there are no users with this username
        if (!items) {
            //display it
            return res.status(401).json({
                message: "No users with this username"
            });
        }

        //if the username is found
        else {

            //try to validate the password
            items.validatePassword(password, function (err, isValid) {

                //if the connection to the DB to validate the password is not working
                if (err) {

                    //display error
                    return res.status(500).json({
                        message: "Could not connect to the DB to validate the password."
                    });
                }

                //if the password is not valid
                if (!isValid) {

                    //display error
                    return res.status(401).json({
                        message: "Password Invalid"
                    });
                }

                //if the password is valid
                else {
                    //return the logged in user
                    return res.json(items);
                }
            });
        };
    });
});
```





## 4. /models/user.js  file
* Mongoose schema

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }
});

userSchema.methods.validatePassword = function (password, callback) {
    bcrypt.compare(password, this.password, (err, isValid) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, isValid);
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
```




## 5. Check the data inside the Mongo DB (Using Robo 3T)
