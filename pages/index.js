import { useEffect, useState } from "react"

export default function Home() {

  const names = ["Prerna Verma", "Anirban Aditya Halder","Kajal Mahato", "Abhishek Purty", "Abhishek Oraon", "Pushker Prakash", "Ankit Dutta", "Sarthak Saraf"]
  const [show, setShow] = useState([])
  const [input, setinput] = useState("")

  // Deletes the chip on clicking it
  function deleteOnClick(el){
    let temp = show.filter((item)=>{return item!==el})
    setShow(temp)

  }

  // Turns the input into chips based on certain conditions
  function addText(el){
    el.preventDefault()

    if(input!=="" && show.includes(input)===false && names.includes(input)===true){
      let temp = show
      temp.push(input)
      setShow(temp)
    }

    setinput("")
  }

  // Handles the state of the input box
  function handleChange(el){

    let temp = el.target.value
    setinput(temp)

  }

  function onBackspace(el){
    if((el.key === "Backspace" || el.key === "Delete") && input === ""){
      let temp = show
      temp.pop()
      setShow(temp)
      setinput(" ")
    }
    
  }

  
  
  return (
    <div className="flex justify-center items-center">   

        <div className="flex justify-center items-center w-[80%]">

          {/* The chip holder div where the names will be displayed (if they exist) */}
          {
            show.map((item)=>{
              return(
                <div className="hover:cursor-default" key={item} >

                  {/* Dummy Div */}
                  <div className="bg-gray-100 h-[3rem] px-1 border-b-blue-500 border-b-2 flex items-center justify-center">

                    {/* User Chip */}
                    <div className=" rounded-full bg-white border-blue-300 border-2 text-sm flex items-center justify-between px-3 py-3 w-[11.8rem] h-[70%]">
                      
                      <div className="mb-1">{item}</div>
                      
                      <div onClick={()=>{deleteOnClick(item)}} className="rounded-full hover:cursor-pointer bg-gray-200 h-5 w-5 flex justify-center items-center">
                        <div className="text-[0.6rem] mb-1">╳</div>
                      </div>

                    </div>

                  </div>
                </div>
              )
            })
          }
          
          
          
          {/* Main Search Bar */}
          <form onSubmit={addText} className="w-full">
            <input id="inputText" type="search" list="myList" value={input} onKeyDown={onBackspace} onChange={handleChange} className='bg-gray-100 w-full h-[3rem] outline-none border-b-blue-500 border-b-2 px-1'></input>
            
            {/* Filtering the options. If they're already there as chips, it won't show on the dropdown. */}
            <datalist id="myList">
              {
                names.filter((item)=>{
                  if(show.includes(item)===false){
                    return true
                  }
                }).map((filteredItem)=>{
                  return(
                    <option key={"filtered"+filteredItem} value={filteredItem}/>
                  )
                })
              }
            </datalist>
          </form>

        </div>
      
      
    </div>
  )
}
