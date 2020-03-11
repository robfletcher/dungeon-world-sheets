import {derived, writable} from 'svelte/store';
import {playbooks} from "./Playbooks";

export const name = writable("");
export const characterClass = writable("The Barbarian");
export const playbook = derived(characterClass, $class => playbooks.find(it => it.name === $class));
export const level = writable(1);
export const xp = writable(0);
export const strength = writable(16);
export const weak = writable(false);
export const str = derived([strength, weak], computeBonus);
export const dexterity = writable(15);
export const shaky = writable(false);
export const dex = derived([dexterity, shaky], computeBonus);
export const constitution = writable(13);
export const sick = writable(false);
export const con = derived([constitution, sick], computeBonus);
export const intelligence = writable(12);
export const stunned = writable(false);
export const int = derived([intelligence, stunned], computeBonus);
export const wisdom = writable(10);
export const confused = writable(false);
export const wis = derived([wisdom, confused], computeBonus);
export const charisma = writable(8);
export const scarred = writable(false);
export const cha = derived([charisma, scarred], computeBonus);
export const hitPointsMax = derived([constitution, playbook], ([$constitution, $playbook]) => $constitution + $playbook.baseHitPoints);
export const damage = writable(0);
export const armor = writable(0);
export const look = writable({});
export const drive = writable({});

function computeBonus([stat, isDebilitated]) {
  return statToBonus(stat) - (isDebilitated ? 1 : 0);
}

function statToBonus(stat) {
  switch (true) {
    case stat < 3:
      console.error("Stat value out of range", stat);
      break;
    case stat === 3:
      return -3;
    case stat <= 5:
      return -2;
    case stat <= 8:
      return -1;
    case stat <= 12:
      return 0;
    case stat <= 15:
      return 1;
    case stat <= 17:
      return 2;
    case stat === 18:
      return 3;
    default:
      console.error("Stat value out of range", stat);
  }
}