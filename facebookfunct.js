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
    
//Callback handler for response
FB.Event.subscribe('auth.authResponseChange', function(response) 
{
     if (response.status === 'connected') 
     {
         document.getElementById("message").innerHTML +=  "<br>Connected to Facebook";
        //SUCCESS
     }   
     else if (response.status === 'not_authorized') 
    {
        document.getElementById("message").innerHTML +=  "<br>Failed to Connect";
        //FAILED
    } else
    {
        document.getElementById("message").innerHTML +=  "<br>Unknown Error: Logged Out";
        //UNKNOWN ERROR. Logged Out
    }
});

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

//Logout --> should reload the current page it's on
function Logout()
{
    FB.logout(function(){document.location.reload();});
 
}
