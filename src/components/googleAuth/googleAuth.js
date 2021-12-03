


function GoogleAuth(){
    
    const redirectToGoogleSSO=async () =>{
        const googleLoginURL='http://localhost:3000/auth/google';
        const newWindow=window.open(googleLoginURL,'_self','width:100%;height:100%');
        setTimeout(()=>{
              window.close();
        },9000)
    }
    
    const redirectToGithubSSO=async () =>{
        const githubLoginURL='http://localhost:3000/auth/github';
        const newWindow=window.open(githubLoginURL,'_self','width:100%;height:100%');
        setTimeout(()=>{
              window.close();
        },9000)
    }
    
    const redirectToFacebookSSO=async () =>{
        const FacebookLoginURL='http://localhost:3000/auth/facebook';
        const newWindow=window.open(FacebookLoginURL,'_self','width:100%;height:100%');
        setTimeout(()=>{
              window.close();
        },9000)
    }

    return(
        <div>
            <button onClick={redirectToGoogleSSO}>Login with Google</button>
            <button onClick={redirectToGithubSSO}>Login with Github</button>
            <button onClick={redirectToFacebookSSO}>Login with facebook</button>
        </div>
    )
}

export default GoogleAuth;