import { useState,useRef } from "react"
export default function Input(){
    const [email,setEmail]=useState("");
    const errorMsg = useRef();
    const inputBox = useRef();
    const errorImg = useRef();
    function changeMonitor(e){
        setEmail(e.target.value);
        validation();
    }
    function validation(){
        const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i;
        if(regex.test(email)=== false || email === null){
            errorMsg.current.style.display = "block";
            inputBox.current.style.borderColor= "hsl(0, 93%, 68%)";
            errorImg.current.style.display = "inline";
            return false;
        }
        else{
            console.log("in else")
            errorMsg.current.style.display = "none";
            inputBox.current.style.borderColor= "hsl(0, 36%, 70%)";
            errorImg.current.style.display = "none";
            return true;
        }
       
    }
    function submit(e){
        if(!validation()){
            e.preventDefault();
        }

    }
    return(
        <div id="input-box">
            <form>
                <input 
                type="text" 
                id="email" 
                name="email" 
                placeholder="Email Address"
                onChange={changeMonitor}
                value={email}
                ref={inputBox}
                />
                <img ref={errorImg} src={process.env.PUBLIC_URL + "/images/icon-error.svg"} id="error-img" alt="error"></img>
                <button type="submit" id="submit" onClick={submit}><img src={process.env.PUBLIC_URL + "/images/icon-arrow.svg"} alt="submit" /></button>

            </form>
            <div id="error-box" ref={errorMsg}>
                Please provide a valid email
            </div>
        </div> 
    )
}