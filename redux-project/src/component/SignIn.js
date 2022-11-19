import React, {useState}from "react";

function SignIn() {
const [data, setData] = useState({
    name: "",
    email : "",
    password : "",
})
const [passwordErr, setPasswordErr] = useState("No Password Entered");
const [isFirstPass, setIsFirstPass] = useState(true);

function inputHandler(e, prop){
    if(isFirstPass === true){
        setIsFirstPass(false)
    }

    let newData = data;

    newData[prop] = e.target.value;

    if(prop === "password"){
        if(newData[prop] === ""){
            setPasswordErr("No Password Entered")
        }else if(newData[prop].length < 8){
            setPasswordErr("Password must be greater than 8 Characters")
        }else{
            setPasswordErr("")
        }
    }
    setData({...newData})

}

function submitHandler(e){
    e.preventDefault()
    if(isFirstPass === true){
        setIsFirstPass(false)
    }
    if(passwordErr === ""){
        console.log(data)
    }
}
  return (
    <div className="formContainer">
        <h3>Sign Up</h3>
        <form className="formLabel" onSubmit={submitHandler}>
            <div>
                <h4>Enter Username :</h4>
                <input type="text" placeholder="Enter Name" name="name" value={data.name} onChange={(e) => inputHandler(e, "name")}/>
            </div>
            <div>
                <h4>Enter E-mail :</h4>
                <input type="email" placeholder="Enter E-mail" name="email" value={data.email} onChange={(e) => inputHandler(e, "email")}/>
            </div>
            <div>
                <h4>Create Password :</h4>
                <input type="password" placeholder="Enter password" name="password" value={data.password} onChange={(e) => inputHandler(e, "password")}/>
                <div style={{color: "red"}}>{passwordErr !== "" && isFirstPass !== true ? passwordErr : null}</div>
            </div>
            <div className="button">
               <button>Sign In</button>
            </div>
        </form>


    </div>
  )
}

export default SignIn