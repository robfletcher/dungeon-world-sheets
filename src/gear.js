export class Gear {
  constructor(name, tags, uses, weight) {
    this.name = name;
    this.tags = tags || [];
    this.uses = uses || null;
    this.weight = weight || 0;
  }
}