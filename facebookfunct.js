//The main facebook file function to call in the first html page
//This is how to comment in JS

//initial facebook library-ish stuff?
      window.fbAsyncInit = function() {
        FB.init({
          appId      : 'your-app-id',
          xfbml      : true,
          version    : 'v2.1'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));

    
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
         },{scope: 'email'}); //Just email for now to make it easy
 
    }

//Getting the user information for login  
function getUserInfo() {
        FB.api('/me', function(response) {
 
      var str="<b>Name</b> : "+response.name+"<br>"; //name
          str +="<b>Link: </b>"+response.link+"<br>"; //link to next webpage/next thing on the phone
          str +="<b>Username:</b> "+response.username+"<br>"; //Username
          str +="<b>id: </b>"+response.id+"<br>"; //ID 
          str +="<b>Email:</b> "+response.email+"<br>"; //User's email
          str +="<input type='button' value='Logout' onclick='Logout();'/>"; //Button to logout
          document.getElementById("status").innerHTML=str;
 
    });
    }

//Logout --> should reload the current page it's on
function Logout()
{
    FB.logout(function(){document.location.reload();});
}

// Load the SDK asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
