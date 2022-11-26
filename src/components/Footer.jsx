
import { FaHome, FaUserAlt } from "react-icons/fa"
import { MdFastfood } from "react-icons/md"
import { Link } from "react-router-dom"

const Footer = () => {



  return (
    <div className='bg-red-600 w-full  py-5 md:relative fixed bottom-0 left-0 right-0 '>

      <div className="  text-center flex md:justify-between justify-center items-center px-10">

        <div className="flex gap-x-5 ">

          <span className="bg-white text-red-600 rounded-md  cursor-pointer drop-shadow-lg hover:scale-95 p-1" >
     

         <MdFastfood className="bg-white text-red-600 rounded-md " size={24} />
   
       
                   
          </span>

          <span
            className="bg-white text-red-600 rounded-md  cursor-pointer drop-shadow-lg hover:scale-95 p-1 caca" >
             
             <Link to ="/">     
                <FaHome size={25} />
             </Link>
             
          </span>

      
        <span className="bg-white text-red-600 rounded-md cursor-pointer drop-shadow-lg hover:scale-95  p-1" >
        <Link to="/signup">
            <FaUserAlt className="bg-white text-red-600 rounded-md " size={24} />
            </Link>

          </span>
        
        


        </div>


        <small className=" md:block hidden text-[10px]">
          Copyright &copy; Trutru Burgers 2022. All Rights Reserved.
        </small>



      </div>
    </div>
  )
}

export default Footer






