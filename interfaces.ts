interface searchFun {
    (src: string, substring: string): boolean   
}

const mySearch: searchFun = function(src, sub){
    return src.search(sub) > -1
}

console.log(mySearch('Meu nome é', 'Meu'))

interface clockInterface {
    currentTime: Date
    setTime(d: Date): void
}

class Clock implements clockInterface {
    currentTime: Date;

    setTime(d: Date): Date {
        this.currentTime = d
        return d
    }

    constructor(){
        this.currentTime = new Date()
    }
}

const relogio: Clock = new Clock()


console.log(relogio.setTime(new Date(2005, 9, 16)))

class Square{

  color: string
  width: number

  constructor(color: string, width: number){
    this.color = color
    this.width = width
  }
}

interface squareOption {
    color?: string
    width?: number
}

function optionSquare(option: squareOption): Square{
    let newSquare = new Square('white', 100)

    if (option.color){
        newSquare.color = option.color
    }

    if (option.width){
        newSquare.width = option.width
    }

    if(option.color && option.width){
        newSquare.width = option.width
        newSquare.color = option.color
    }


    console.log(newSquare)

    return newSquare
}

optionSquare({width: 10})