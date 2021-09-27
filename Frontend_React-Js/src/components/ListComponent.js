<html>
<div id="container">
        <div id="tabs">
            <p id="lt" class="tabs" onclick="loginTabFun()">Log in</p>
            <p id="rt" class="tabs" onclick="regTabFun()">Register</p>

            <div id="clear"></div>
        </div>

        <div id="cont">
            <div id="login" class="comm">
                <h3>Sign in</h3>

                <input id="se" type="email" placeholder="Email" required/>
                <input id="sp" type="password" placeholder="Password" required/>
                <input type="submit" onclick="login()" value="Submit"/>

                <p onclick="forTabFun()">Forget Password?</p>
            </div>
            <div id="register" class="comm">
                <h3>Register</h3>

                <input id="re" type="email" placeholder="Email" required/>
                <input id="rp" type="password" placeholder="Password" required/>
                <input id="rrp" type="password" placeholder="Re write Password" required/>
                <input type="submit" onclick="register()" value="Submit"/>

            </div >
            <div id="forgot" class="comm">
            <h3>Forgot Password</h3>
            <div>
                <input id="fe" type="email" placeholder="Email" required/>
                <input type="submit" onclick="forgot()" value="Submit"/>
            </div>
            </div>
        </div>
    </div>
    <body>
      
    </body>
    
    </html>