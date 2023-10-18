import { Book } from './Books/Books'
import { sizeConverter } from './sizeConverter/sizeConverter.mjs'
import standard from '../../books/Storage Standard.pdf'
import streams from '../../books/Streams Standard.pdf'
import xml from '../../books/XMLHttpRequest Standard.pdf'

export class DomControl {
  constructor () {
    this.books = []
    this.downloadSize = 0
    this.init()

    document.querySelectorAll('.link').forEach(el => el.addEventListener('click', this.onSend))
  }

  init = () => {
    const book1 = new Book('Storage Standard', 310497, standard)
    const book2 = new Book('Streams Standard', 1693988, streams)
    const book3 = new Book('XMLHttpRequest Standard', 832946, xml)
    this.books = [book1, book2, book3]
    this.downloadSize = Number(localStorage.getItem('download'))
    this.downloaded()
  }

  onSend = (event) => {
    fetch(event.target.href)
      .then(res => res.blob())
      .then(blob => this.downloadSize += blob.size) //eslint-disable-line
      .then(() => this.downloaded())
  }

  downloaded = () => {
    document.querySelector('.dsize').innerText = sizeConverter(this.downloadSize)
    localStorage.setItem('download', this.downloadSize)
  }
}
