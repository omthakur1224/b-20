import  {useEffect,useState} from "react"

// type 
const useClock = () => {

const [sec,setSec]=useState(0)
  const today= new Date()
  // const time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()
  let timerId:any;
  let Hours=today.getHours()
  let Minutes=today.getMinutes()
  let Seconds=today.getSeconds()

  const findTime=()=>{
   timerId= setInterval(()=>{
     Hours=today.getHours()
     Minutes=today.getMinutes()
     Seconds=today.getSeconds()
     setSec(Seconds)
},1000)

  }

  useEffect(()=>{
findTime()

return ()=>clearInterval(timerId)

  },[sec])

  console.log(timerId)

return {Hours,Minutes,Seconds}

  // TODO
  // refer readme.md for what to return
};

export default useClock;