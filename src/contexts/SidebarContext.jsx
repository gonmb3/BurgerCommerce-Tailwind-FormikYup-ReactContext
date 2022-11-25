import { createContext, useEffect, useState, useContext } from "react"

const SidebarContext = createContext();

const SidebarProvider = ({children}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () =>{
    setIsOpen(false)
  }

    return(
        <SidebarContext.Provider
        value={{
        
          handleClose,
          setIsOpen,
          isOpen 
        }}
        >
            {children}
        </SidebarContext.Provider>
    )
}

export {SidebarProvider}

export default SidebarContext


export const useSidebarContext = () => {
    return useContext(SidebarContext)
}
