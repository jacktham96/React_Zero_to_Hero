export default function ChatRoom({image, username, message}) {
    return(
      <div className="flex space-x-4 py-2">
        <img src={image} className="rounded-full w-16" alt="lorem"/>
        <div className="text-sm">
  
          <h3 className="font-bold">{username}</h3>
          <p>{message}</p>
  
        </div>
      </div>
    )
  }