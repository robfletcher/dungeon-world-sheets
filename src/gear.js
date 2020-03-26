export class Gear {
  constructor(name, tags, uses, weight) {
    this.name = name;
    this.tags = tags || [];
    this.uses = uses || null;
    this.weight = weight || 0;
  }
}

export const standardGear = [
  {
    group: 'Weapons',
    items: [
      new Gear('Ragged bow', ['near'], null, 2),
      new Gear('Fine bow', ['near', 'far'], null, 2),
      new Gear('Hunter\'s bow', ['near', 'far'], null, 1),
      new Gear('Crossbow', ['near', '+1 damage', 'reload'], null, 3),
      new Gear('Bundle of arrows', [], 3, 1),
      new Gear('Elven arrows', [], 4, 1),
      new Gear('Club', ['close'], null, 2),
      new Gear('Shillelagh', ['close'], null, 2),
      new Gear('Staff', ['close', 'two-handed'], null, 2),
      new Gear('Dagger', ['hand'], null, 1),
      new Gear('Throwing dagger', ['thrown', 'near'], null, 0),
      new Gear('Short sword', ['close'], null, 1),
      new Gear('Axe', ['close'], null, 1),
      new Gear('Warhammer', ['close'], null, 1),
      new Gear('Mace', ['close'], null, 1),
      new Gear('Spear', ['reach', 'thrown', 'near'], null, 1),
      new Gear('Long sword', ['close', '+1 damage'], null, 2),
      new Gear('Battle axe', ['close', '+1 damage'], null, 2),
      new Gear('Flail', ['close', '+1 damage'], null, 2),
      new Gear('Halberd', ['reach', '+1 damage', 'two-handed'], null, 2),
      new Gear('Rapier', ['close', 'precise'], null, 1),
      new Gear('Dueling rapier', ['close', 'precise', '1 piercing'], null, 2),
    ]
  },
  {
    group: 'Armor',
    items: [
      new Gear('Leather', ['1 armor', 'worn'], null, 1),
      new Gear('Chainmail', ['1 armor', 'worn'], null, 1),
      new Gear('Scale mail', ['2 armor', 'worn', 'clumsy'], null, 3),
      new Gear('Plate', ['3 armor', 'worn', 'clumsy'], null, 4),
      new Gear('Shield', ['+1 armor'], null, 2),
    ]
  },
  {
    group: 'Dungeon Gear',
    items: [
      new Gear('Adventuring gear', [], 5, 1),
      new Gear('Bandages', ['slow', 'heal 4'], 3, 0),
      new Gear('Poultices and herbs', ['slow', 'heal 7'], 2, 1),
      new Gear('Healing potion', ['heal 10 / remove 1 debility'], 2, 0),
      new Gear('Keg of dwarven stout', ['+1 Carouse'], null, 4),
      new Gear('Bag of books', ['+1 Spout Lore'], 5, 2),
      new Gear('Antitoxin', ['cure poison'], null, 0),
      new Gear('Dungeon rations', ['ration'], 5, 1),
      new Gear('Personal feast', ['ration'], 1, 1),
      new Gear('Dwarven hardtack', ['dwarf', 'ration'], 7, 1),
      new Gear('Elven bread', ['ration'], 7, 1),
      new Gear('Halfling pipeleaf', ['+1 Parley when shared'], 6, 0),
    ]
  },
  {
    group: 'Poisons',
    items: [
      new Gear('Oil of Tagit', ['dangerous', 'applied'], null, 0),
      new Gear('Bloodweed', ['dangerous', 'touch'], null, 0),
      new Gear('Goldenroot', ['dangerous', 'applied'], null, 0),
      new Gear('Serpent’s Tears', ['dangerous', 'touch'], null, 0),
    ]
  }
];
