console.log("welcome javascript")
document.write("<h1>hello javascript</h1")
alert("yeah javascipt")


var a=10;
console.log(a)
console.log(typeof(a))


a="javascript"
console.log(a)
console.log(typeof(a))


a="true"
console.log(typeof(a))
console.log(a)


a=10;
if(a==10){
    console.log("equal")
} else {
    console.log("not equal")
}
for(var i=0;i<10;i++) {
    console.log(i)
}

var s=function disp(){
    console.log("calling disp")
}
//disp()
s()

var c=function () {
    console.log("Ananymmous function ")
}
c()

function register() {
    console.log("calling submit")

    var email=document.getElementById("email")
    console.log(email)
    console.log(email.value)
    if(email.value==""){
        var err=document.getElementById("errEmail")
         err.innerHTML="Please Enter email"
         err.style.color="red"
     }
    
    var password=document.getElementById("password")
    console.log(password)
    console.log(password.value)
    if(password.value==""){
       var err=document.getElementById("errPassword")
        err.innerHTML="Please Enter password"
        err.style.color="red"
    }

    console.log(document.registration.gender)

    if(document.registration.gender[0].checked==false &&
    document.registration.gender[1].checked==false &&
    document.registration.gender[2].checked==false){
    console.log("Please select gender")
    var err=document.getElementById("errGender")
   err.innerHTML="Please Select Gender"
    err.style.color="red"
    }

    if(document.registration.city.value=="0"){
        console.log("Please Select City")
        var err=document.getElementById("errCity")
        err.innerHTML="Please Select City"
        err.style.color="red"
    }
        
   var message=document.getElementById("message")
      message.innerHTML="Adding data from js" 
}



// how to  retrieve data from html to javascript

