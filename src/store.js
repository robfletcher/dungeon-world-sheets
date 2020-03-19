import {writable} from 'svelte/store';
import {Character} from "./character";

let saved = localStorage.getItem("character");
let recovered = saved == null ? new Character("The Barbarian") : Character.fromJSON(saved);
export const character = writable(recovered);

character.subscribe(c => {
  // TODO: this just ensures if we change class we automatically get starting moves, this doesn't remove old ones and is probably running WAAAAAY too often
  c.playbook.startingMoves.reverse().forEach(move => {
    if (!c.moves.some(it => it.name === move)) {
      c.moves.unshift({ name: move });
    }
  });

  localStorage.setItem("character", JSON.stringify(c));
});

// TODO: this is a probably inappropriate use of a store but saves me using near infinite amounts of event forwarding
export const selectedMove = writable(null);
