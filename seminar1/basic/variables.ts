const isLiked: boolean = true;
console.log(`${typeof isLiked}, ${isLiked}`);

const str: string = 'hello';
console.log(`${typeof str}, ${str}`);

const num: number = 31;
console.log(`${typeof num}, ${num}`);

let numbers: number[] = [1, 2, 3];

const strings: Array<String> = ['hi', 'hello'];

const objArray1: Object[] = [{ item1: 'oh' }, { item2: 'wow' }];

const objArray2: object[] = [{ item1: 'oh' }, { item2: 'wow' }];

const foo1 = (something: object): void => {
  console.log(something);
};
const foo2 = (something: Object): void => {
  console.log(something);
};

// foo1('boom');
foo2('boom');

const hello = (name: string): void => {
  console.log(`${name}아 안녕`);
};

const sum = (a: number, b: number): number => {
  return a + b;
};

const a: any = '남지윤';
const nameLength = (a as string).length;

const nameLength2 = (<string>a).length;
console.log(nameLength);
console.log(nameLength2);
