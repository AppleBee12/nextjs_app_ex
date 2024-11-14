"use client"
import Link from "next/link";
import { useRouter, useParams } from 'next/navigation'

const Control = ()=>{
  const params = useParams();
  const id = (params.id);
  const router = useRouter()

  const deleteTopic = ()=>{
    const option = {method:'DELETE'};
    fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id,option)
    .then(res=>{
       return res.json();//json->object
    })
    .then(result=>{
      router.push('/');//해당페이지로 이동
      router.refresh();//반영
     });
  }
  
  return(
    <ul>
      <li><Link href="/create">Create</Link></li>
      {id && <>
      <li><Link href={`/update/${id}`}>Update</Link></li>
      <li><button onClick={deleteTopic}>delete</button></li>
      </>}
    </ul>
  )
}

export default Control;