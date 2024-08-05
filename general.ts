let myfn: (a: number, b: number) => number = (a, b) => a / b;

let myFn2: <T extends number, U extends number>(a: T, b: U) => number = (
  a,
  b
) => a + b;

console.log(myFn2(1, 2));

// tipagem gradual, aqui o TS irá inferir qual o tipo de retorno
// Onde há possibilidade de erro é necessário tipar
const func = (a: number, b: number) => a + b;

const myNun = 20;

console.log(func(1, 2), myNun);

interface Point {
  x: number;
  y: number;
}

interface Coord {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x} && ${p.y}`);
}

const coord: Coord = { x: 10, y: 20 };

logPoint(coord);

interface Person {
  readonly id: number; //propriedade utilizada apenas para leitura (inalteravel)
  name: string;
  age: number;
  address?: string; //vairavel opcional, não obrigação de sua declaração
}

function greet(p: Person) {
  console.log(
    `Hello, my name is ${p.name}, i'm ${p.age} and i live in ${p.address}, my id is ${p.id}`
  );
}

const person: Person = {
  id: 1,
  name: "Samuel",
  age: 18,
  address: "Rua João Vecchi 1556",
};

greet(person);

// interface é mais adequada para definir a estrutura de objetos, enquanto type é mais versátil e pode ser usado para unir tipos, criar aliases, etc

// estendendo interfaces para criar novas interfaces com base nas existentes

interface Employee extends Person {
  employeeId: number;
  position: string;
  readonly empresa: string;
}

const trabalhador: Employee = {
  name: "Ronaldo",
  age: 32,
  position: "Auxiliar de produção",
  id: 2,
  employeeId: 3455,
  address: "Rua das Palmeiras",
  empresa: 'Coamo'
};

console.log(`Meu nome é ${trabalhador.name}, trabalho na ${trabalhador.empresa}, tenho ${trabalhador.age} anos, sou ${trabalhador.position}, meu id pessoal é ${trabalhador.id} e meu Id empresarial é ${trabalhador.employeeId}. Moro na ${trabalhador.address}`)
