// ✅ actions.js completo con sincronización total
const API_BASE = "https://playground.4geeks.com/contact";
const AGENDA_SLUG = "bermont13";

// 🔁 GET - Cargar contactos
export const loadContacts = async (dispatch) => {
  try {
    const resp = await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts`);
    if (!resp.ok) throw new Error("Error al cargar contactos");
    const data = await resp.json();
    dispatch({ type: "load_contacts", payload: data.contacts || [] });
  } catch (error) {
    console.error("❌ Error cargando contactos:", error);
  }
};

// ➕ POST - Agregar contacto
export const addContact = async (dispatch, contactData) => {
  try {
    const response = await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    });
    if (!response.ok) throw new Error("Error al agregar contacto");
    await loadContacts(dispatch);
  } catch (error) {
    console.error("❌ Error agregando contacto:", error);
  }
};

// ✏️ PUT - Actualizar contacto
export const updateContact = async (dispatch, id, contactData) => {
  try {
    const response = await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    });
    if (!response.ok) throw new Error("Error al actualizar contacto");
    await loadContacts(dispatch);
  } catch (error) {
    console.error("❌ Error actualizando contacto:", error);
  }
};

// 🗑️ DELETE - Eliminar contacto
export const deleteContact = async (dispatch, id) => {
  try {
    const response = await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts/${id}`, {
      method: "DELETE"
    });
    if (!response.ok) throw new Error("Error al eliminar contacto");
    await loadContacts(dispatch);
  } catch (error) {
    console.error("❌ Error eliminando contacto:", error);
  }
};

