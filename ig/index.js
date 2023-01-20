    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAO0NIUAvSCPAHZvNE05fiV_QHo8g0SJ2s",
        authDomain: "login-with-firebase-data-500b0.firebaseapp.com",
        projectId: "login-with-firebase-data-500b0",
        storageBucket: "login-with-firebase-data-500b0.appspot.com",
        messagingSenderId: "177008284848",
        appId: "1:177008284848:web:bcf5801848b3a172d05775"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      const auth = firebase.auth()
      const database = firebase.database(); 

      function register () {
        email = document.getElementById('email').value
        password = document.getElementById('password').value

        if(validate_email(email) == false || validate_password(password) == false) {
            alert('Email or Password is Outta Line')
            return 
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then(function(){

            var user = auth.currentUser

            var database_ref = database.ref()
            var user_data = {
                email : email, 
                password : password
            }
            database_ref.child('user/' + user.uid).set(uesr_data)

            alert('User  Created!!')

        })

        .catch(function(error) {
            var error_code = error.code 
            var error_message = error.message 

            alert(error_message)
        })

      }

      function validate_email(email) {
        expression = /^[^@]+@\w+(\.\w+)+\w$/
        if (expression.test(email) == true) {
            return true
        } else {
            return false
        }

      }

      function validate_password(password) {
        if (password < 6) {
            return false
        } else {
            return true
        }
      }

      function validate_field(field) {
        if (field == null) {
            return false

        }

        if (field.length <=0) {
            return false 
        } else {
            return true
        }

      }