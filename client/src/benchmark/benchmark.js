import React, { useEffect, useState } from "react";
import "./benchmark.css";

function chatsReceived(active_agents, incoming_chats, active_chats) {
  return (
    <div className="tickets-received">
      <h3 className="bench-header">Chats/Agents Detials</h3>
      <ul className="received-list">
        <li>
          <p className="today">Open Chats</p>
          <p className="today-value">{incoming_chats}</p>
        </li>
        <li>
          <p className="today">Active Chats</p>
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

function ticketOpen(First_response, Mid_market, Enterprise, voicemails) {
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
          <p className="thirtyday">Mid Market</p>
          <p className="thirtyday-value">{Mid_market}</p>
        </li>
        <li>
          <p className="thirtyday">Voice Mail</p>
          <p className="thirtyday-value">{voicemails}</p>
        </li>
      </ul>
    </div>
  );
}

function Benchmark() {
  useEffect(() => {
    fetchItems();
  }, []);

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
          {chatsReceived(
            item.active_agents,
            item.incoming_chats,
            item.active_chats
          )}
          {ticketOpen(item.first_response, item.mid_market, item.enterprise, item.voicemails)}
          <div className="credit">
            Made by <span className="team-name">Prashant</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Benchmark;
