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
      <h3 className="bench-header">Voicemails Segments</h3>
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

          <div className="credit">
            Made by <span className="team-name">Prashant</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Benchmark;
