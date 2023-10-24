import React, { useRef } from 'react'
import './scss/message.scss';

function Message(){
  let messageCount = 1;
  const $ul = useRef();

  function removeLastMessage(){
    if($ul.current.childElementCount <= 1) return;
    const $lastLi = $ul.current.querySelector("li:last-of-type");
    $lastLi.remove();
  }

  async function getDataFromServer(commentCount){
    const res = await fetch('https://jsonplaceholder.typicode.com/comments/' + commentCount);
    const dataJson = await res.json();
    return dataJson;
  }

  async function addMessage(){
    const data = await getDataFromServer(messageCount++);

    const $li = document.createElement("li");
    const $email = document.createElement("span");
    const $message = document.createElement("span");

    $email.textContent = data.email;
    $email.classList.add("email");
    $message.textContent = data.name;
    $message.classList.add("message");
    $li.append($email);
    $li.append($message);

    $ul.current.append($li);
  }

  return(
    <div className="message">
      <div className="inner">
        <div className="btn-wrap">
          <button onClick={addMessage}>+1</button>
          <button onClick={removeLastMessage}>-1</button>
        </div>
        <ul id="messageUl" ref={$ul}>
          <li><span className='email'>Email</span><span className="message">Message</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Message;