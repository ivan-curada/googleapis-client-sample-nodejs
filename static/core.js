function init(){
    gapi.load('client', ()=>{
        console.log('Auth loaded')
        gapi.client.init({
            apiKey: '',
            clientId: '363232934631-pjbd198u1kic7hlmpooh690kirmqg7iq.apps.googleusercontent.com',
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
            scope: 'profile https://www.googleapis.com/auth/gmail.send',
            access_type: 'offline'
        })
    })
}

async function signIn(){
    var googleAuth = gapi.auth2.getAuthInstance()
    const googleUser = await googleAuth.signIn()
    var response = googleUser.getAuthResponse()

    var token = response.access_token
    var expiry = response.expires_in
    
    document.getElementById("auth").innerHTML = JSON.stringify(token);
    document.getElementById("expiry").innerHTML = JSON.stringify(expiry);
}