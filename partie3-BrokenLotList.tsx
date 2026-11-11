import { useState, useEffect } from "react";

type Lot = { id: string; status: string };

const statusLabels: Record<string, string> = {
  draft: "Brouillon",
  recorded: "Enregistré",
};

export function BrokenLotList({
  fetchLots,
}: {
  fetchLots: () => Promise<Lot[]>;
}) {
  const [lots, setLots] = useState<Lot[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  async function load() {
    try {
      const data = await fetchLots();
      setLots(data);
    } catch {
      setError("Impossible de charger les lots.");
    } finally {
      setLoading(false);
    }
  }
  load();
}, [fetchLots]);

  const visible = lots.filter((l) => filter === "all" || l.status === filter);

  if (loading) {
    return <p>Chargement des lots...</p>
  }
  if (error) {
    return <p role="alert">{error}</p>
  }

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}  aria-label="Filtrer les lots par statut">
        <option value="all">Tous</option>
        <option value="draft">Brouillon</option>
        <option value="recorded">Enregistré</option>
      </select>
      {visible.length === 0 ? (
        <p>Aucun lot à afficher.</p>
      ) : (
        <ul>
          {visible.map((l) => (
            <li key={l.id}>
              {l.id} - {statusLabels[l.status] ?? l.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
