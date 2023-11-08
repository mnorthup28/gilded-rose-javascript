export { Item, BasicItem, LegendaryItem, CheezeItem, ConjuredItem, TicketItem };
class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class BasicItem extends Item {
  updateQuality() {
    this.sellIn--;
    if (this.quality > 0) {
      this.quality--;
    }
  }
}

class CheezeItem extends Item {
  updateQuality() {
    this.sellIn--;
    if (quality < 50) {
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
    if (this.sellIn <= 10) {
      this.quality += 2;
    } else if (this.sellIn <= 5) {
      this.quality += 3;
    } else if (this.sellIn < 0) {
      this.quality = 0;
    } else {
      this.quality++;
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
    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (item.quality > 0) {
        if (item.name != "Sulfuras, Hand of Ragnaros") {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != "Aged Brie") {
        if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
          if (item.quality > 0) {
            if (item.name != "Sulfuras, Hand of Ragnaros") {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }
};
