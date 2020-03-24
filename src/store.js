import {writable} from 'svelte/store';
import {Character} from "./character";
import {storeCharacter} from "./database";

export const character = writable();
