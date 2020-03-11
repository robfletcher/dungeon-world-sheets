import {derived, writable} from 'svelte/store';
import {playbooks} from "./Playbooks";

export const name = writable("");
export const characterClass = writable("The Barbarian");
export const playbook = derived(characterClass, $class => playbooks.find(it => it.name === $class));
export const level = writable(1);
export const xp = writable(0);
export const strength = writable(16);
export const dexterity = writable(15);
export const constitution = writable(13);
export const intelligence = writable(12);
export const wisdom = writable(10);
export const charisma = writable(8);
export const hitPointsMax = derived([constitution, playbook], ([$constitution, $playbook]) => $constitution + $playbook.baseHitPoints);
export const damage = writable(0);
export const armor = writable(0);
export const look = writable({});
export const drive = writable({});
