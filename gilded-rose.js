export { Item, BasicItem, LegendaryItem, CheezeItem, ConjuredItem, TicketItem };

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality() {
    this.sellIn--;
    if (this.sellIn < 0) {
      this.quality = Math.max(0, this.quality - 2);
    } else {
      this.quality = Math.max(0, this.quality - 1);
    }
  }
}

class BasicItem extends Item {}

class CheezeItem extends Item {
  updateQuality() {
    this.sellIn--;
    if (this.quality < 50) {
      this.quality++;
    }
  }
}

class LegendaryItem extends Item {
  updateQuality() {}
}

class TicketItem extends Item {
  updateQuality() {
    this.sellIn--;
    if (this.sellIn > 10) {
      this.quality++;
    } else if (this.sellIn >= 5 && this.sellIn <= 10) {
      this.quality += 2;
    } else if (this.sellIn >= 0 && this.sellIn < 5) {
      this.quality += 3;
    } else {
      this.quality = 0;
    }
  }
}

class ConjuredItem extends Item {
  updateQuality() {
    this.sellIn--;
    if (this.quality >= 2) {
      this.quality -= 2;
    }
  }
}

export let items = [];

items.push(new BasicItem("+5 Dexterity Vest", 10, 20));
items.push(new CheezeItem("Aged Brie", 2, 0));
items.push(new BasicItem("Elixir of the Mongoose", 5, 7));
items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new TicketItem("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new ConjuredItem("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    item.updateQuality();
  }
};
