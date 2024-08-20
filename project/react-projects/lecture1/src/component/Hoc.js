import React, { useState } from 'react'

function Hoc() {
  return (
    <div>
        <h1>HOC FILE</h1>
        <HOCRed cmp={Counter}/>
        <HOCGreen cmp={Counter}/>
        <HOCPink cmp={Counter}/>
    </div>
  )
}


function HOCRed(props){
return(
    <h2 style={{backgroundColor: "red" , width : 100, textAlign: "center"} }>
        red
        <props.cmp/>

    </h2>
)
}

function HOCGreen(props){
    return(
        <h2 style={{backgroundColor: "green" , width : 100, textAlign: "center"} }>
        red
         <props.cmp/>
    </h2>
)
}

function HOCPink(props){
    return(
        <h2 style={{backgroundColor: "pink" , width : 100 , textAlign: "center"} }>
        red
        <props.cmp/>

    </h2>
    ) 
}

function Counter(props){
    const [ count , setcount] = useState(0)
    return(
    <div>
        <h3>{count}</h3>
       <button onClick={() => setcount(count+1)}>
        Counter
       </button>
    </div>
    ) 
}

export default Hoc