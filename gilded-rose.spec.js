import { expect, describe, it } from "vitest";
import {
  Item,
  items,
  updateQuality,
  BasicItem,
  LegendaryItem,
  CheezeItem,
  ConjuredItem,
  TicketItem,
} from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new BasicItem("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });

  it("decreases quality by two for items with sellIn less than zero", () => {
    const testItem = new BasicItem("basic", -3, 6);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(4);
  });

  it("does not decrease the quality of an item with 0 quality", () => {
    const testItem = new BasicItem("basic", 3, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
  });

  it("this item increases in quality when sellIn decreases", () => {
    const testItem = new CheezeItem("Aged Brie", 4, 4);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(5);
  });

  it("does not increase beyond 50", () => {
    const testItem = new CheezeItem("Aged Brie", 3, 50);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
  });

  it("below five days backstage increases by 3", () => {
    const testItem = new TicketItem(
      "Backstage passes to a TAFKAL80ETC concert",
      3,
      10
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(13);
  });

  it("below 10 days backstage increases by 2", () => {
    const testItem = new TicketItem(
      "Backstage passes to a TAFKAL80ETC concert",
      8,
      10
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(12);
  });

  it("after concert backstage is 0", () => {
    const testItem = new TicketItem(
      "Backstage passes to a TAFKAL80ETC concert",
      0,
      10
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
  });

  it("no sell in date for Sulfuras", () => {
    const testItem = new LegendaryItem("Sulfuras, Hand of Ragnaros", null, 10);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(null);
  });

  it("Quality of Sulfuras will not decrase", () => {
    const testItem = new LegendaryItem("Sulfuras, Hand of Ragnaros", null, 10);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(10);
  });

  it("conjured items decrease twice as fast in quality", () => {
    const testItem = new ConjuredItem("Conjured", 4, 10);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(8);
  });
});
