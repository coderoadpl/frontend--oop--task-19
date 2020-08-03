const render = function () {
    this.container.innerHTML = ''

    const div = document.createElement('div')
    div.style.backgroundColor = this.color
    div.style.width = '100px'
    div.style.height = '100px'

    this.container.appendChild(div)
}

// object literal

const square1 = {
    color: 'red',
    container: document.querySelector('.square-1'),
    render: render,
}

square1.render()

// Object constructor

const square2 = new Object()
square2.color = 'green'
square2.container = document.querySelector('.square-2')
square2.render = render

square2.render()
square2.color = 'blue'
square2.render()

// factory function

const makeSquare = function (color, container) {
    return {
        color: color,
        container: container,
        render: render,
    }
}

const square3 = makeSquare('green', document.querySelector('.square-3'))
square3.render()
const square4 = makeSquare('blue', document.querySelector('.square-4'))
square4.render()

// constructor functions

const Square = function (color, container) {
    this.color = color
    this.container = container

    this.render()
}

Square.prototype.render = render

const square5 = new Square('black', document.querySelector('.square-5'))
const square6 = new Square('gray', document.querySelector('.square-6'))

// class

const SquareClass = class {

    constructor(color, container) {
        this.color = color
        this.container = container

        this.render()
    }

    render() {
        render.call(this)
    }

}

const square7 = new SquareClass('yellow', document.querySelector('.square-7'))