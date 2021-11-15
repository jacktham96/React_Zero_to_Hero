import { ReactComponent as HOME_ICON } from '../assets/icons/home.svg'
import { ReactComponent as SEARCH_ICON } from  '../assets/icons/search.svg'
import { ReactComponent as CHAT_ICON } from '../assets/icons/chat.svg'
import { ReactComponent as PERSON_ICON } from '../assets/icons/person.svg'
import { ReactComponent as PLUS_ICON } from '../assets/icons/plus.svg'


export default function BottomNav() {
    return(
      <footer className="fixed bottom-0 w-full">
        <nav className="w-full flex justify-between">
          <button className="p-4">
            <HOME_ICON className="w-4"/>
          </button>
          <button className="p-4">
            <SEARCH_ICON className="w-4"/>
          </button>
          <button className="px-6 py-4">
            <PLUS_ICON className="w-4"/>
          </button>
          <button className="p-4">
            <CHAT_ICON className="w-4"/>
          </button>
          <button className="p-4">
            <PERSON_ICON className="w-4"/>
          </button>
  
          
        </nav>
      </footer>
  
    )
  }