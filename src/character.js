import {derived, writable} from 'svelte/store';
import {playbooks} from "./Playbooks";

class Stat {
  constructor(value) {
    this.value = value;
    this.isDebilitated = false;
  }

  get bonus() {
    return Stat.statToBonus(this.value) - (this.isDebilitated ? 1 : 0);
  }

  static statToBonus(stat) {
    switch (true) {
      case stat < 3 || stat > 18:
        throw `Stat value ${stat} is out of range`;
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
    }
  }
}

export const name = writable("");
export const characterClass = writable("The Barbarian");
export const playbook = derived(characterClass, $class => playbooks.find(it => it.name === $class));
export const level = writable(1);
export const xp = writable(0);
export const nextLevel = derived(level, $level => $level + 7);
export const strength = writable(new Stat(16));
export const dexterity = writable(new Stat(15));
export const constitution = writable(new Stat(13));
export const intelligence = writable(new Stat(12));
export const wisdom = writable(new Stat(10));
export const charisma = writable(new Stat(8));
export const hitPointsMax = derived([constitution, playbook], ([$constitution, $playbook]) => $constitution.value + $playbook.baseHitPoints);
export const damage = writable(0);
export const armor = writable(0);
export const look = writable({});
export const drive = writable({});
