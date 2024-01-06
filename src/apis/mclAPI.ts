import api from "./api";

export async function getRandomID() {
  return api.get('mcl')
    .then(res => res.data);
}