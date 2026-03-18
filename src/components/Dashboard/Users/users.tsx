interface Users {
  id:number,
  name:string,
  email:string,
}

const user: Users[] = [
  {
    id:1,
    name: "Davlat Murodov",
    email: "davlatmurodov@gmail.com"
  }
]

const users = () => {
  return (
    <div>
      <h1 className="dark:text-white text-xl">Users</h1>
    </div>
  )
}

export default users
