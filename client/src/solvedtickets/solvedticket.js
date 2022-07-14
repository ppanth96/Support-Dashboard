import React, { useEffect, useState } from "react";
import "./solvedtickets.css";

function table(agent_name, solved_tickets) {
  return (
    <tr>
      <td data-label="Agent Name">{agent_name}</td>
      <td data-label="Solved Tickets">{solved_tickets}</td>
    </tr>
  );
}

function Solved() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/scores");
    const items = await data.json();
    setItems(items);
  };
  return (
    <section>
      <h2>Tickets Solved</h2>
      <div class="table-wrapper">
        <table class="fl-table">
          <thead>
            <tr>
              <th>Agent</th>
              <th>Total Tickets Solved</th>
            </tr>
          </thead>
          <tbody>
          {items.map((item) => (
            table(item.agent, item.tickets_solved)
          ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Solved;
