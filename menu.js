
if (!document.getElementById("navigation")){document.write(`<div class="container-fluid text-center bg-transparent text-light masthead-sub">
    <h1 class="mastTitle-sub " ><a href="/" style="text-decoration:none;color:white;"><b>SOCRATHEMATICS</b></a></h1>
  <p class="mastTitle-sub-2" ><b>Math, right at your fingertips</b></p>

</div>
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="navigation" style="opacity:0.9;">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="/"><img class="rounded pop" src="https://socrathematics.github.io/favicon.png" height=40 width="40"> <span class="sr-only">(current)</span></a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link pop" href="/modular-arithmetic" id="mod">Modular Arithmetic</a>
      </li>
      <li class="nav-item">
        <a class="nav-link pop" href="/trigonometry" id="trig">Trigonometry</a>
      </li>
      <li class="nav-item">
        <a class="nav-link pop" href="/calculus" id="calc">Calculus</a>
      </li>
      <li class="nav-item" >
        <a class="nav-link pop" href="/request-course" id="rc">Request a Course</a>
      </li>
      <li class="nav-item" >
        <a class="nav-link pop" href="/faq" id="faq">FAQ</a>
      </li>
    </ul>
   <div class="navbar-nav ml-md-auto">
   <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2 mx-1" type="search" placeholder="Search" aria-label="Search" id="sque">
    <button class="btn btn-outline-success my-2 mx-1 my-sm-0" type="submit" id="sbut">Search</button>
   </form>
   <li class="nav-item nav-link text-dark cursor-pointer" id="su" data-toggle="modal" data-target="#sum" style="display:none">Sign Up</li>
   <li class="nav-item nav-link text-dark cursor-pointer" id="si" data-toggle="modal" data-target="#sim" style="display:none">Sign In</li>
   <li class="nav-item nav-link text-dark cursor-pointer" id="so" data-toggle="modal" data-target="#som" style="display:none" >Sign Out</li>

    <li class="nav-item dropdown" id="ma" >
                        <a class="nav-link dropdown-toggle text-dark" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Account</a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item cursor-pointer "  data-toggle="modal" data-target="#mam" >Account Info</a>
                            <a class="dropdown-item cursor-pointer text-dark " href="/u/dashboard">Dashboard</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item cursor-pointer " data-toggle="modal" data-target="#som">Sign out</a>

                        </div>
                    </li>
  </div>
 </div>
</nav>

    <div class="modal fade" id="sum" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="suml" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="suml">Get your very own account!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="signup-form">
            <div class="form-group">
                <label class="" for="signup-email">Email Address</label>
                <input class="form-control" type="email" id="signup-email" required />

            </div>
            <div class="form-group">
                <label class="" for="signup-password">Password</label>
                <input class="form-control" type="password" id="signup-password" required />
                <p class="text-muted form-text" id="sum-e" style=""><br></p>
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="submit" id="sub" class="btn btn-success" >Sign Up</button>
      </div>
    </div>
  </div>
</div>

    <div class="modal fade" id="sim" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="siml" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="siml">Sign in to your account</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="modal-body">
        <form id="signin-form">
            <div class="form-group">
                <label class="" for="signin-email">Email Address</label>
                <input class="form-control" type="email" id="signin-email" required />

            </div>
            <div class="form-group">
                <label class="" for="signin-password">Password</label>
                <input class="form-control" type="password" id="signin-password" required />
                <p class="text-muted form-text" id="sim-e" style=""><br></p>
            </div>
        </form>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-success" id="sib">Sign In</button>
      </div>
    </div>
  </div>
</div>

    <div class="modal fade" id="som" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="soml" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="soml">Sign Out</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="modal-body">
        <p>Are you sure you want to sign out? Any progress won't be saved unless you log back in.</p>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="submit" id="sob" class="btn btn-success">Sign Out</button>
      </div>
    </div>
  </div>
</div>

     <div class="modal fade" id="vm" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="vml" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="vml">Verify your email</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <p> It looks like you're using an unverified email. If you want to continue using this email, please verify your email.</p>
          <p>If you would like to activate your account at a later time, you can sign out and continue using SOCRATHEMATICS.</p>
      </div>
      <div class="modal-footer">
        <button type="button" id="vdb"  class="btn btn-danger">Delete my account</button>
        <button type="button" id="vsob" class="btn btn-secondary" >Sign Out</button>
          <button type="button" id="vrb" class="btn btn-success" >Reload</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="som" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="soml" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="soml">Sign Out</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="modal-body">
        <p>Are you sure you want to sign out? Any progress won't be saved unless you log back in.</p>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="submit" id="sob" class="btn btn-success">Sign Out</button>
      </div>
    </div>
  </div>
</div>

    <div class="modal fade" id="mam" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="maml" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="maml">My Account</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="modal-body">
            <p>You are logged in as <a id="mam-email">(error fetching email)</a>.</p>
            <div class="form-group form-row">
                <label for="mam-name" class="col-form-label col-sm-2">Name</label>
                <input id="mam-name" class="form-control col-sm-10">
            </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="submit" id="mab" class="btn btn-success">Save Changes</button>
      </div>
    </div>
  </div>
</div>
`);
console.log("Menu and header successfully written to DOM.")}

function activate(id){
document.getElementById(id).className += " top active ";}

document.querySelector("#sbut").addEventListener("click", (e) => {
e.preventDefault();
var query = document.getElementById("sque");


const params = new URLSearchParams(location.search);
params.set('q', query.value);

console.log(params.toString());
document.location  =  "/search/?" + params.toString();


});

document.querySelector("#sque").addEventListener("search", (e) => {
e.preventDefault();
var query = document.getElementById("sque");


const params = new URLSearchParams(location.search);
params.set('q', query.value);

console.log(params.toString());
document.location  =  "/search/?" + params.toString();


});
