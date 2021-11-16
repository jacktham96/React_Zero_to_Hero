import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Main from "./pages/Main";
import {useState} from "react";

function ChatBox({image,message , right}) {

  const element = [
    <div>
      <img className="rounded-full w-48" src={image} />
    </div> ,   
    <p className="bg-gray-200 p-4 rounded-lg ">{message}</p> 
  ]

  return (
    <div className="flex space-x-4">
      {right ? element.reverse() : element}
    </div>
  )
}


function ChatRoom({message}) {

  return (
    <div className="px-4 py-4 space-y-5">
      {
        message.map((msg, index) =>(
          <ChatBox image={msg.image} message={msg.message} right={index % 2} />
        ))
      }
    </div>
  )
}


function App() {
  const [message, setMessage] = useState([]);

  console.log(message.length)

  return (
    <div>
      <Header title="Chat" canBack/>
      <ChatRoom message={message}/>
      <BottomNav onPlusClick={() => {
        setMessage([...message, {
          image : 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/012/50/M010125046.jpg&v=606e78c0&w=280&h=280',
          message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        }])
      }}
      />
    </div>
  );
}

export default App;
