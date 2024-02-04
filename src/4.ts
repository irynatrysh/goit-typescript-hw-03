// Клас Key
class Key {
  private sign: number = Math.random();

  getSignature(): number {
    return this.sign;
  }
}

// Клас Person
class Person {
  constructor(private key: Key, protected name: string) {}

  getKey(): Key {
    return this.key;
  }

  getName(): string {
    return this.name;
  }
}

// Абстрактний клас House
abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getName()} entered the house.`);
    } else {
      console.log('The door is closed.');
    }
  }
}

// Клас MyHouse, що успадковується від абстрактного класу House
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is opened.');
    } else {
      console.log('Invalid key. The door remains closed.');
    }
  }
}

// Сценарій

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key, 'Alice');

house.openDoor(person.getKey());
house.comeIn(person);


export {};