"use client";
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react';


export default function Update() {
  const params = useParams();
  const id = params.id;
  // useEffect client컴포넌트에서 데이터 조회
  // const [topic, setTopic] = useState([]);
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
    useEffect(()=>{
    fetch('http://localhost:9999/topics/'+id)
    .then(res=>{
       return res.json();//json->object
    })
    .then(result=>{
      setTitle(result.title);
      setBody(result.body);
    });
    
  },[id])
  // 서버형 컴포넌트, 데이터 조회
  // const response = await fetch(`http://localhost:9999/topics/${props.params}}`);
  // const topic = await response.json(); //json->object
  
  const router = useRouter()
  const onSubmit=(e)=>{
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const options = {
      method: "PATCH",//PATCH메서드는 전체 리소스를 대체하지 않고 필요한 부분만 수정할때 사용
      headers:{
        'Content-Type':'application/json'
      }, 
      body:JSON.stringify({title, body})//object->json
      //JSON.stringify = const obj = {name="hong"}
    }
    fetch('http://localhost:9999/topics/'+id, options)
    .then(res=>res.json())//결과를 객체로 변환
    .then(result=>{
      console.log(result);
      router.push(`/read/${result.id}`);//해당페이지로 이동
      router.refresh();//반영
    })
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text"
           name="title"
           onChange={(e)=>{
            setTitle(e.target.value);
          }} 
          placeholder="title"
          value={title}/>
        </div>
        <div>
          <textarea name="body"
            onChange={(e)=>{
              setBody(e.target.value);
            }}  
            placeholder="content"
            value={body}>
          </textarea>
        </div>
        <button type="submit"> 전송</button>
      </form>
      <p>Update!</p>

    </div>
  );
}
