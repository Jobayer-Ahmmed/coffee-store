

const PostCafe = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const data = {name}
        fetch("http://localhost:5000/post-cafe",{
            method:"POST",
            headers:{"content-type" : "application/json"},
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
  return (
    <div className="w-1/5 mx-auto bg-gray-100 p-10 mt-10">
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="" className="outline-none mb-4 border-[2px]" /><br />
            <input type="submit" value="Submit" id="" className="btn btn-success" />
        </form>
    </div>
  )
}

export default PostCafe