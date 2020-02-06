import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context.js";
import axios from "axios";
import "./AllClients1.scss";

const AllClients1 = () => {
  const { statusUrl } = useAppContext();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    if (statusUrl !== "") {
      axios
        .get(`${statusUrl}/api/getclients`)
        .then(response => setClients([...response.data]))
        .catch(err => console.log(err));
    }
  }, [statusUrl]);

  return (
    <div className="allMother">
      <div className="allMain">
        <section className="leftSect">
          <div className="headDiv">
            <h1 className="head">Sign Ups</h1>
          </div>
        </section>
        <section className="rightSect">
          <div className="rightSectChild">
            {clients.length !== 0 ? (
              clients.map(client => (
                <div key={client.id} className="clientItem">
                  <h3 className="clientEmail">{client.email}</h3>
                </div>
              ))
            ) : (
              <div>
                <h3>No clients yet</h3>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllClients1;
