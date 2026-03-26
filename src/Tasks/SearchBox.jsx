import {useState,useEffect} from 'react'

function SearchBox() {

    const [users,setUsers] = useState([]);
    const [searches , setSearches] = useState('');
    const [deboundedSearch , setDeboundedSearch] = useState('');

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))
    },[])

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDeboundedSearch(searches.trim())
        },1000)

        return ()=> clearTimeout(timer);
    },[searches])

    const filterUsers = users.filter((user) => 
        user.name.toLowerCase().includes(deboundedSearch.trim())
    )

  return (
    <div>
        <h2>Users List</h2>

        <input 
        type="text"
        placeholder='Search users....'
        value={searches}
        onChange={(e)=> setSearches(e.target.value)}
        />
        {filterUsers.map((user) =>(
                <div key={user.id}>
                    <h4>{user.name}</h4>
                    <h4>{user.username}</h4>
                </div>
            ))}
    </div>
  )
}

export default SearchBox
