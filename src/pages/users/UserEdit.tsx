import axios from "axios";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Redirect } from "react-router";
import Wrapper from "../../components/Wrapper";
import { Role } from "../../models/Role";

const UserEdit = (prpos: any) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role_id, setRoleId] = useState("");
  const [roles, setRoles] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get("roles");
      setRoles(response.data);

      const {data} = await axios.get(`users/${prpos.match.params.id}`)

      setFirstName(data.first_name)
      setLastName(data.last_name)
      setEmail(data.email)
      setRoleId(data.role.id)
    })();
  }, []);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.put(`users/${prpos.match.params.id}`, {
      first_name,
      last_name,
      email,
      role_id: parseInt(role_id),
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/users" />;
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="First Name" 
            defaultValue={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name" 
            defaultValue={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email" 
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <select
            className="form-control" 
            defaultValue={role_id}
            onChange={(e) => setRoleId(e.target.value)}
          >
            {roles.map((r: Role) => {
              return (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              );
            })}
          </select>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Save
        </button>
      </form>
    </Wrapper>
  );
};

export default UserEdit;
