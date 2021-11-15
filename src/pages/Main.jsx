import ChatRoom from "../components/ChatRoom"

export default function Main() {
    const rooms = [
      {
        image: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/012/50/M010125046.jpg&v=606e78c0&w=280&h=280' , 
        username : 'Yor' , 
        lastMessage : 'Spy X Family'
      } ,
  
      {
        image: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/012/50/M010125046.jpg&v=606e78c0&w=280&h=280' , 
        username : 'Yor' , 
        lastMessage : 'Spy X Family'
      } ,
  
      {
        image: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/012/50/M010125046.jpg&v=606e78c0&w=280&h=280' , 
        username : 'Yor' , 
        lastMessage : 'Spy X Family'
      } ,
  
      {
        image: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/012/50/M010125046.jpg&v=606e78c0&w=280&h=280' , 
        username : 'Yor' , 
        lastMessage : 'Spy X Family'
      } ,
  
      {
        image: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/012/50/M010125046.jpg&v=606e78c0&w=280&h=280' , 
        username : 'Yor' , 
        lastMessage : 'Spy X Family'
      } ,
  
      {
        image: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/012/50/M010125046.jpg&v=606e78c0&w=280&h=280' , 
        username : 'Yor' , 
        lastMessage : 'Spy X Family'
      } ,
      
    ]
    return(
      <div className="px-4 py-2 divide-y">
        {
          rooms.map((room) => (
            <ChatRoom image={room.image} username={room.username} message={room.lastMessage}/>
          ))
        }
      </div>
    )
  }