import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context.js";
import axios from "axios";
import "./AllClients1.scss";

const AllClients1 = () => {
  const { statusUrl } = useAppContext();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const getClients = () => {
        axios
      .get(`${statusUrl}/api/getclients`)
      .then(response => setClients([...response.data]))
      .catch(err => console.log(err));  
  }

  useEffect(() => {
    getClients();
    setTimeout(() => {
        setLoading(false)
    }, 500)
    
  }, []);

  if(loading) {
      return <h1>Loading</h1>
  }

  return (
    <div className="allMother">
      <h3>Hello</h3>
      <h3>URL: {statusUrl}</h3>
      {clients.map(client => (
        <div>{client.email}</div>
      ))}
    </div>
  );
};

export default AllClients1;
