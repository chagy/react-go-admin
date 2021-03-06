import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { User } from "../../models/User";

const Users = () => {
  const [users,setUsers] = useState([])
  const [page,setPage] = useState(1)
  const [lastPage,setLastPage] = useState(0)
  
  useEffect(()=>{
    (
      async () => {
        const { data } = await axios.get(`users?page=${page}`)

        setUsers(data.data);
        console.log(data.data);

        setLastPage(data.meta.last_page);
      }
    )()
  },[page])

  const next = () => {
    if(page <= lastPage){
      setPage(page + 1)
    }
    
  }

  const prev = () => {
    if(page >= 1){
      setPage(page - 1)
    }
  }

  const del = async(id: number) => {
    if(window.confirm('Are sure')){
      await axios.delete(`users/${id}`);

      setUsers(users.filter((u: User) => u.id !== id))
    }
  }

  return (
    <Wrapper>
      <>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to={'/users/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.first_name} {user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.role.name}</td>
                  <td>
                    <div className="btn-group mr-2">
                      <Link to={`/users/${user.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                      <a href="#" onClick={() => del(user.id)} className="btn btn-sm btn-outline-secondary">
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" onClick={prev}>Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link" onClick={next}>Next</a>
            </li>
          </ul>
        </nav>
      </div>
      </>
      
      
    </Wrapper>
  );
};

export default Users;
