import { useRef, useState } from 'react';
import Button from './components/Button'
import Com from './components/Com'
function App() {

  const comment = useRef('');
  

  const [children,setChildren] = useState([]);

  
  // when button click put child in that 

  
  // When the button is clicked, add a new child component to the state
  function send() {

    if(comment.current !== ''){
    const c = <Com key={children.length} com={comment.current} />;
    setChildren([...children, c]);
    }
  }


  return (
    <div className="w-full h-[100vh] bg-[#E2BFD9] text-white font-mono ">
      <div className="py-4 lg:py-20 container m-auto h-[100vh]  ">
        
        <div className="m-auto">
          {/* Apna Dabba */}
          <nav className="lg:hidden border-b-0 border-black border-[10px]   bg-[#674188] justify-start py-4 px-8  " >
            <h1 className="text-2xl font-bold">ChatBox</h1>
          </nav>


          {/* container apla */}
          <main className="flex  border-black border-[10px] bg-[#674188]">   

              {/* navBar */}
              <sidebar className=" border-black border-r-[10px] hidden lg:block w-[20vw] py-12 pl-8  ">
                
                <h1 className=" mr-4 font-bold text-2xl" >ChatBox</h1>
              </sidebar>

              <div className="flex-auto  overflow-hidden">
                <div className="flex flex-col  ">
                { /*comments  */}
                  <div className= "overflow-auto p-4 h-[80vh] lg:h-[70vh] bg-[#C8A1E0]">

                    <ul id="field" className=" text-white  break-words   ">
                      {children}
                    </ul>

                  </div>

                  {/* input field */}
                  <div className="flex">
                    <input onChange={ e => comment.current = e.target.value}  className="focus:outline-none p-2 pl-8 flex-1 text-black  outline:none" placeholder="Message"></input>
                    <Button name="send" onClick={send}  />
                  </div>
      
                </div>
              </div>
            </main>
          </div>
      </div>
    </div>
  )
}

export default App