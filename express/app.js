const express= require("express")
const app = express();
const port = process.env.PORT || 9091

// for getting the data from the post request
app.use(express.json());

// For getting the form url encoded data in the request
app.use(express.urlencoded({extended:true}))
// it is used to show whatever available inside the folder should be publically available
app.use(express.static("public"))

//template engine
app.set('view engine', 'ejs')

/////creating a login page using template engine
app.get("/login", (req, res)=>{
    res.render('login', {title:'hey', message:"hello there"})
})


app.get("/api", function(req, res, next){
    const data={
        name:"sonali",
        
    }
    res.json(data)

    // res.send({
    //     name:"sonali",
        
    // })
})
// // app.post("/api/post",function(res,req){
// //     const data=req.body
// //     res.send(data)
// //     console.log(req.body)
// })
// app.post("/api/post",function(req,res){
//     console.log(req.body);
//     const data=req.body;

//   res.json(data);

// })
 //post api --->

 app.post('/post', (req,res) => {

    res.send(req.body)

    console.log(req.body)

})
//sending an html file 
app.get("/html", (req,res)=>{
    //it give an absolute path
    console.log(__dirname);
    res.sendFile(__dirname+"/views/app.html")
})
app.get("/dynamichtml", (req,res)=>{
    const data=[{
        name:"sonali"
    },
    {
        name:"xyz"
    },
    {
        name:"abc"
    }
]
let str="";
for(let i=0; i<data.length; i++ ){
    str+=` <div class="col-4">
    <div class="card" style="width: 18rem;">
        <!-- <img src="https://tse4.mm.bing.net/th?id=OIP.P8fJWbgoZs1jfbe7aaTLHQHaEK&pid=Api&P=0&w=314&h=176" class="card-img-top" alt="..."> -->
        <img src="/images/natue.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>`
}
const html=`
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>template engine</title>
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link href="/css/style.css" rel="stylesheet">
</head>

<body>
	<div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          <div class="row">
              ${str}
                  </div>
              </div>
          </div>
    </div>
   
</body>
</html>`
res.send(html)
})




app.listen(port, ()=>{
    console.log("your servsr is running at port"+port)
})