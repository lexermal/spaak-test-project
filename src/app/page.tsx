"use client"

import { useEffect, useState } from "react";
import Kanban from "./components/kanban/board";
import toKanbanEntries, { getStatusName, KanbanEntry } from "@/utils/KanbanEntryMapping";
import Navbar from "./components/Navbar";

export default function Home() {
  const [entries, setEntries] = useState<KanbanEntry[]>([]);

  useEffect(() => {
    fetch("/api/gov-data")
      .then((res) => res.json())
      .then(toKanbanEntries)
      .then((data) => setEntries(data));
  }, []);

  return <div className="bg-gray-900">
    <Navbar />
    <Kanban
      entries={entries}
      onChange={(id, status) => console.log(`Kanban card ${id} changed to status: ${getStatusName(status)}`)} />
  </div>;
}