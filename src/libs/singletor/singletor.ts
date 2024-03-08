export type Constructor<T> = object & {
  new (): T;
  name: string;
  prototype: T;
};

export class Singletor {
  protected static storage: Record<string, object> = {};
  public static from<T extends object, K extends Constructor<T> = Constructor<T>>(Klass: K): T {
    if (!(Klass.name in Singletor.storage)) {
      const instance = new Klass();
      Singletor.storage = Object.assign({}, Singletor.storage, { [Klass.name]: instance });
    }

    return Singletor.storage[Klass.name] as T;
  }
}
