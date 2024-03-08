import { describe, expect, it } from 'vitest';
import { Singletor } from './singletor';

describe.only('singletor', () => {
  class Counter {
    public value: number;
    public constructor() {
      this.value = 0;
    }

    public increase() {
      this.value++;
    }

    public decrease() {
      this.value--;
    }
  }

  describe('the <Counter> class', () => {
    it('should have <name> property', () => {
      expect(Counter).toHaveProperty('name');
    });

    it('should be <name> property same value with <Counter> class name', () => {
      expect(Counter.name).toEqual('Counter');
    });
  });

  describe('the <count> without singletor', () => {
    let count: Counter = new Counter();

    it('should be instance of <Counter> class', () => {
      expect(count).instanceOf(Counter);
    });

    it('should have initialy <0>', () => {
      expect(count.value).toEqual(0);
    });

    it('should be increased to <1>', () => {
      count.increase();
      expect(count.value).toEqual(1);
    });

    it('should be increased to <3>', () => {
      count.increase();
      count.increase();
      expect(count.value).toEqual(3);
    });

    let old_count: Counter;
    it('should be instance of <Counter> class, the re-instanced', () => {
      old_count = Object.assign({}, count);
      count = new Counter();
      expect(count).instanceOf(Counter);
    });

    it('should not be same with old instance', () => {
      expect(old_count).not.toMatchObject(count);
    });

    it('should have initialy <0> again', () => {
      expect(count.value).toEqual(0);
    });
  });

  describe('the <count> with singletor', () => {
    let count: Counter = Singletor.from<Counter>(Counter);

    it('should be instance of <Counter> class', () => {
      expect(count).instanceOf(Counter);
    });

    it('should have initialy <0>', () => {
      expect(count.value).toEqual(0);
    });

    it('should be increased to <1>', () => {
      count.increase();
      expect(count.value).toEqual(1);
    });

    it('should be increased to <3>', () => {
      count.increase();
      count.increase();
      expect(count.value).toEqual(3);
    });

    let old_count: Counter;
    it('should be instance of <Counter> class, the re-instanced', () => {
      old_count = Object.assign({}, count);
      count = Singletor.from<Counter>(Counter);
      expect(count).instanceOf(Counter);
    });

    it('should be same with old instance', () => {
      expect(old_count).toMatchObject(count);
    });

    it('should not have initialy <0>', () => {
      expect(count.value).toEqual(3);
    });
  });
});
