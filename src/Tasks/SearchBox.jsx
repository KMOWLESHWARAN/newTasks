import { useEffect, useState } from 'react'

function SearchBox() {

    const [users,setUsers] = useState([]);
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('')
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))
    },[]);

    const filterUSers = users.filter(user =>
        user.name.toLowerCase().includes(query)
    )
    const handleClick =()=>{
        setQuery(search.trim());
    }

  return (
    <div>
        <h4>Users List</h4>
        <div>
            <input 
        type="text" 
        placeholder='Search...'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
        
        <button onClick={handleClick}>Search</button>
        </div>
        {
            filterUSers.length > 0 ? (
                filterUSers.map((user) => (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                    </div>
                ))
            ) : (
                <p>No userFound</p>
            ) 
        }
    </div>
  )
}

export default SearchBox;
