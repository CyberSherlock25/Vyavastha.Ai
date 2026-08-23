import { useEffect, useState } from "react";
import { getAllEvents } from "../../services/adminService";

function AdminDashboard() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      setLoading(true);

      const data = await getAllEvents();

      setEvents(data);
    } catch (error) {
      console.error(error);
      setError("Unable to load events");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <p>Manage and supervise submitted events.</p>

      {loading && <p>Loading events...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <h2>Submitted Events</h2>

          {events.length === 0 ? (
            <p>No events found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Event Name</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>{event.id}</td>
                    <td>{event.eventName}</td>
                    <td>{event.location}</td>
                    <td>{event.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
}

export default AdminDashboard;