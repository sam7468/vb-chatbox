import React,{useEffect, useState} from 'react';
import './style.css'
import moment from 'moment'
import agentpng from'./icons/an.png'
import userpng from'./icons/man2.png'
import chatbg from './bg1.jpg'

const Chatcontainer = ()=>{

    const [data , setchatdata] = useState([{message:"hi user",createdAt:"2021-09-14T13:23:02.298Z",sender:"agent",_id:"1"},
    {message:"how are you doing today",createdAt:"2021-09-14T13:23:02.298Z",sender:"user",_id:"2"},
    {message:"i'm good, how about you?",createdAt:"2021-09-14T13:23:02.298Z",sender:"agent",id:"3"},
    {message:"i'm good, thanks for asking",createdAt:"2021-09-14T13:23:02.298Z",sender:"user",id:"4"},
    {message:"how can i help you today?",createdAt:"2021-09-14T13:23:02.298Z",sender:"agent",id:"5"}])

    const [agentMessages,setAgentMessage] = useState([])
    const [userMessages,setUserMessage] = useState([])

    const [message,setmessage] = useState("")
    const [inputValue, setInputValue] = useState("");

    //trigger the useeffect once
    const [triggerOnce ,settrigger]  = useState(false)

    //getDatafromServer()
    useEffect(()=>{
        settrigger(true)
        data.map(e=>{
            if(e.sender=="user"){
                userMessages.push(e)
            }else{
                agentMessages.push(e)
            } 
        })
    },[])

    const setdata=(e)=>{
        setmessage(e.target.value)
        setInputValue(e.target.value);
    }

    const addtoChat = (e)=>{
        setUserMessage(arr => [...arr,{message:message,createdAt:moment().toString(),sender:"user",id:(agentMessages.length + userMessages.length)+1}])
        setInputValue("");
    }

    return(
        <>  
            <div className="container">
                
                {/* <img className="chatbg" src={chatbg}></img> */}
                
                <div className="agent-side">
                    {agentMessages.map((data)=>(
                         <div className="agent-chat-box">
                            <img src={agentpng}></img>
                            <p className="message">{data.message}</p>
                            <p className="timeago">{moment(data.createdAt).fromNow()}</p>
                         </div>   
                    ))}
                </div>

                <div className="user-side">
                    {userMessages.map((data)=>(
                         <div className="user-chat-box">
                            <img src={userpng}></img>
                            <p className="message">{data.message}</p>  
                            <p className="timeago">{moment(data.createdAt).fromNow()}</p>
                         </div>
                    ))}
                </div>
            </div>
            <div className="input-box">
                    <input type="text" value={inputValue} maxLength="70" onChange={(e)=>{setdata(e)}}></input>
                    <button type="submit" onClick={addtoChat}>s e n d</button>
                </div>
        
        </>
)
}

export default Chatcontainer
