


function GoogleAuth(){
    
    const redirectToGoogleSSO=async () =>{
        const googleLoginURL='http://localhost:3000/auth/google';
        const newWindow=window.open(googleLoginURL,'_self','width:100%;height:100%');
        setTimeout(()=>{
              window.close();
        },9000)
    }
    
    return(
        <div>
            <button onClick={redirectToGoogleSSO}>Login</button>
        </div>
    )
}

export default GoogleAuth;