function init() {
    FB.api(
      '/l214.animaux',
      {"fields":"fan_count"},
      function(response) {
        console.log(response.fan_count);
      }
    );
}
window.fbAsyncInit = function() {
    window.FB.init({
      appId      : '1060665031037534',
      cookie     : true,
      xfbml      : true,
      version    : 'v8.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };
  
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

//    window.FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
// });

async function  checkLoginState() {
   
    window.FB.login(function(response) {
        if (response.authResponse) {
        //    this.login.createAccount(response.authResponse.accessToken, 'fb') 
            
            console.log('in js file',response)
            return  response;
        testAPI();
        } else {
            console.log('in js file',response)
            return  response;
            // cancelled
        }

        console.log('in js file',response)
        return  response;
    }
        , { scope: 'email' });
    }

function testAPI() {

    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {

        console.log('Good to see you, ' + response.name + '.' + ' Email: ' + response.email + ' Facebook ID: ' + response.id);
    });

    // FB.getLoginStatus(function(response) {
    //   statusChangeCallback(response);
    // });
  }







  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
            console.log('Successful login for: ' + response.name);
            document.getElementById('status').innerHTML =
              'Thanks for logging in, ' + response.name + '!';
        });
    } else {
        // The person is not logged into your app or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
    }
}