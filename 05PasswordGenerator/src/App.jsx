import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAlllowed, setNumberAllow] = useState(false)
  const [charAllowed, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  // ref hook use ref hook 

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAlllowed) {
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*+-/~"
    }

    for(let i = 1; i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)


  }, [length,numberAlllowed, charAllowed, setPassword])

  const copyPassToClip = useCallback(()=> {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAlllowed,charAllowed,passwordGenerator])



  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500'>
     <h1 className='text-white text-center my-3'>Password Generator</h1>
     <div className="flex shadow-rounded-lg overflow-hidden mb-4">
      <input type="text" value= {password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
      <button className='outline-none bg-blue-700 text-white
      px-3 py-0.5 shrink-0' onClick={copyPassToClip}>copy</button>
     </div>
     <div className="flex text-sm gap-x-2">
      <div className="flex-items-center gap-x-1">
        <input type="range" min={8} max={20} value={length} className='cursor-pointer' onChange={(e) =>{setLength(e.target.value)}}/>
        <label>length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={numberAlllowed} onChange={()=> {setNumberAllow((prev) => !prev)
        }} />
        <label>Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={charAllowed} onChange={()=> {setCharAllow((prev) => !prev)
        }} />
        <label>Characters</label>
      </div>
     
     </div>
     </div>
    </>
  )
}

export default App
