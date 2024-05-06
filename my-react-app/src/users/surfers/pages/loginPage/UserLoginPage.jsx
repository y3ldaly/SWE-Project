import './UserLoginPage.css'

/*FIXME: this page needs to be fixed */

function UserLoginPage() {
   return(
      
         <div className="center">
         <input type="checkbox" id="show"/>
         <label for="show" className="show-btn">View Form</label>
         <div className="container">
            <label for="show" className="close-btn fas fa-times" title="close"></label>
            <div className="text">
               Login Form
            </div>
            <form action="#">
               <div className="data">
                  <label>Email or Phone</label>
                  <input type="text" required/>
               </div>
               <div className="data">
                  <label>Password</label>
                  <input type="password" required/>
               </div>
               <div className="forgot-pass">
                  <a href="#">Forgot Password?</a>
               </div>
               <div className="btn">
                  <div className="inner"></div>
                  <button type="submit">login</button>
               </div>
               <div className="signup-link">
                  Not a member? <a href="#">Signup now</a>
               </div>
            </form>
         </div>
      </div>
      
   )
}

export default UserLoginPage