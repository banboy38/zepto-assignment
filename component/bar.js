import PP from "./pp"


export default function Bar({data}){
    return(
        <div className="flex flex-row justify-center items-center ">
            <PP/>
            <input type="text"></input >
            <input type="text" className='bg-gray-100 h-[1.5rem] border-b-blue-500 border-b-2'></input>
        </div>
    )
}