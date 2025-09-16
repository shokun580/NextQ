const API = "http://localhost:3000/api"

export async function getQueue() {
    return fetch(`${API}/queue`).then(res => res.json())
}

export async function takeTicket() {
    return fetch(`${API}/tickets`, { method: "POST" }).then(res => res.json())
}

export async function callNext() {
    return fetch(`${API}/queue/next`, { method: "POST" }).then(res => res.json())
}