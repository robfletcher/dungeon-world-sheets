import {writable} from 'svelte/store';
import {Character} from "./character";

let saved = localStorage.getItem("character");
let recovered = saved == null ? null : Character.fromJSON(saved);
export const character = writable(recovered);

character.subscribe(c => {
  if (c != null) {
    localStorage.setItem("character", JSON.stringify(c));
  }
});
