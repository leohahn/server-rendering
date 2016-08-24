import {observable, computed} from 'mobx'

class Todos {
  @observable items = []
  @computed get itemsUpper () {
    return this.items.map((item) => item.toUpperCase())
  }

  add (todo) {
    this.items.push(todo)
  }
}

export default new Todos
