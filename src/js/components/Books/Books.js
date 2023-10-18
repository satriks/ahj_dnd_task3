import { sizeConverter } from '../sizeConverter/sizeConverter.mjs'

export class Book {
  constructor (title, size, url) {
    this.board = document.querySelector('.board__books')
    this.url = url
    this.title = title
    this.size = sizeConverter(size)
    this.dom = null
    this.create()
  }

  create () {
    const book = document.createElement('div')
    book.classList.add('book')

    const title = document.createElement('span')
    title.classList.add('title')
    title.innerText = this.title

    const size = document.createElement('span')
    size.classList.add('size')
    size.innerText = this.size

    const link = document.createElement('a')
    link.classList.add('link')
    link.href = this.url
    link.target = '_blank'
    link.innerText = 'Download'
    link.rel = 'noopener'
    link.download = `${this.title}.pdf`

    book.append(title, size, link)
    this.dom = book

    this.board.appendChild(this.dom)
  }
}
