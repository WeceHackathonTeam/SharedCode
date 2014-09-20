//The main facebook file function to call in the first html page
//This is how to comment in JS


//Login
function Login()
    {
        FB.login(function(response) {
           if (response.authResponse) 
           {
                getUserInfo(); // Get User Information.
 
            } else
            {
             console.log('Authorization failed.');
            }
         },{scope: 'email'});
 
    }

//Getting the user information for login  
function getUserInfo() {
      FB.api('/me', function(response) {
 
        //response.name       - User Full name
        //response.link       - User Facebook URL
        //response.username   - User name
        //response.id         - id
        //response.email      - User email
 
        });
   }  
