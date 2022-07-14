import React, { useEffect, useState } from "react";
import "./benchmark.css";

function chatsReceived(active_agents, incoming_chats, active_chats) {
  return (
    <div className="tickets-received">
      <h3 className="bench-header">Chats/Agents Detials</h3>
      <ul className="received-list">
        <li>
          <p className="today">Chats Waiting</p>
          <p className="today-value">{incoming_chats}</p>
        </li>
        <li>
          <p className="today">Chats Taken</p>
          <p className="today-value">{active_chats}</p>
        </li>
        <li>
          <p className="thirtyday">Agents Online</p>
          <p className="thirtyday-value">{active_agents}</p>
        </li>
      </ul>
    </div>
  );
}

function ticketOpen(First_response, Mid_market, Enterprise) {
  return (
    <div className="tickets-open">
      <h3 className="bench-header">Tickets Open By Segments</h3>
      <ul className="open-list">
        <li>
          <p className="thirtyday">Total Open</p>
          <p className="thirtyday-value">{First_response}</p>
        </li>
        <li>
          <p className="today">Enterprise</p>
          <p className="today-value">{Enterprise}</p>
        </li>
        <li>
          <p className="thirtyday">MidMarket</p>
          <p className="thirtyday-value">{Mid_market}</p>
        </li>
      </ul>
    </div>
  );
}

function vmsData(callbacks_waiting, agents_online, calls_waiting, voicemails) {
  return (
    <div className="tickets-open">
      <h3 className="bench-header">Phones Segments</h3>
      <ul className="open-list">
        <li>
          <p className="thirtyday">Callbacks Waiting</p>
          <p className="thirtyday-value">{callbacks_waiting}</p>
        </li>
        <li>
          <p className="today">Calls Waiting</p>
          <p className="today-value">{calls_waiting}</p>
        </li>
        <li>
          <p className="thirtyday">Agents Online</p>
          <p className="thirtyday-value">{agents_online}</p>
        </li>
        <li>
          <p className="today">VoiceMail</p>
          <p className="today-value">{voicemails}</p>
        </li>
      </ul>
    </div>
  );
}

function statusOperational(duda_status, ecwid_status) {
  if (
    duda_status === "All Systems Operational" ||
    ecwid_status === "All Systems Operational"
  ) {
    return (
      <div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="12" height="12" rx="6" fill="#60BEB9" />
        </svg>
        <span className="operation-status">
          {duda_status} <span className="platform">(Duda)</span>
        </span>
        <br></br>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="12" height="12" rx="6" fill="#60BEB9" />
        </svg>
        <span className="operation-status">
          {ecwid_status} <span className="platform">(Ecwid)</span>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="12" height="12" rx="6" fill="#f66035" />
        </svg>
        <span className="operation-status">
          {duda_status} <span className="platform">(Duda)</span>
        </span>
        <br></br>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="12" height="12" rx="6" fill="#f66035" />
        </svg>
        <span className="operation-status">
          {ecwid_status} <span className="platform">(Ecwid)</span>
        </span>
      </div>
    );
  }
}

function Benchmark() {
  useEffect(() => {
    fetchItems();
  }, []);

  // useEffect(() => {
  //   fetchItems()
  //   console.log("hey it's working!")
  //   const intervalId = setInterval(fetchItems, 180000);
  //   return function() { clearInterval(intervalId) }
  // }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/ticket");
    const items = await data.json();
    setItems(items);
  };
  return (
    <section>
      {items.map((item) => (
        <div className="benchmarks-bar">
          <div className="status">
          {statusOperational(item.duda_status,item.ecwid_status)}
          </div>
          {ticketOpen(item.first_response, item.mid_market, item.enterprise)}
          {chatsReceived(
            item.active_agents,
            item.incoming_chats,
            item.active_chats
          )}
          {vmsData(
            item.callbacks_waiting,
            item.agents_online,
            item.calls_waiting,
            item.voicemails
          )}
        </div>
      ))}
    </section>
  );
}

export default Benchmark;
