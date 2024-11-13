"use client";
export default function Create() {
  const onSubmit=(e)=>{
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const options = {
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      }, 
      body:JSON.stringify({title, body})//object->json
      //JSON.stringify = const obj = {name="hong"}
    }
    fetch('http://localhost:9999/topics', options)
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
    })
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" name="title" placeholder="title"/>
        </div>
        <div>
          <textarea name="body" placeholder="content"></textarea>
        </div>
        <button type="submit"> 전송</button>
      </form>
      <p>Create!</p>

    </div>
  );
}
