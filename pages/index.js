import Bar from "@/component/bar"
import PP from "@/component/pp"
import { useState } from "react"

export default function Home() {

  const names = ["Prerna Verma", "Kajal Mahato", "Abhishek Purty", "Abhishek Oraon", "Pushker Prakash", "Ankit Dutta", "Sarthak Saraf"]
  const [show, setShow] = useState(["hello", "pokemon"])
  const [input, setinput] = useState("")

  function handleClick(el){
    let currId = el.target.id
    // console.log(currId)
    // console.log(el)

    let temp = show.filter((item)=>{return item!==currId})
    setShow(temp)

  }

  function addText(el){
    el.preventDefault()
    const text = document.getElementById("inputText")
    console.log(text.innerHTML)
  }

  return (
    <div className="flex justify-center items-center">   

        <div className="flex justify-center items-center w-[80%]">

          {
            show.map((item)=>{
              return(
                <div className="hover:cursor-pointer" key={item} onClick={handleClick}>
                  {/* Dummy Div */}
                  <div className="bg-gray-100 h-[3rem] px-1 border-b-blue-500 border-b-2 flex items-center justify-center">

                    {/* User Card */}
                    <div onClick={handleClick} id={item} className=" rounded-full bg-white border-blue-300 border-2 text-sm flex items-center justify-center px-3 py-3 w-full h-[70%]">
                      <span id={item} className="mb-1">{item}</span>
                    </div>

                  </div>
                </div>
              )
            })
          }

          
          
          
          {/* Main Search Bar */}
          <form onSubmit={addText} className="w-full">
            <input id="inputText" type="text" value={input} onChange={(el)=>{setinput(el.)}} className='bg-gray-100 w-full h-[3rem] outline-none border-b-blue-500 border-b-2 px-1'></input>
          </form>

        </div>
      
      
    </div>
  )
}
