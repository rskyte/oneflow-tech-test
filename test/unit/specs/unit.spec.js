import Vue from 'vue'
import app from '@/App';

describe('app.vue', () => {

  it("adds todo's to list", () => {
    const Constructor = Vue.extend(app)
    const subject = new Constructor().$mount()
    subject.newTodo = 'test'
    let testAddTodo = subject.$options.methods.addTodo.bind(subject)
    testAddTodo()
    expect(subject.todos[0].title).to.equal('test')
  });

  it("removes todo's from list", function() {
    const Constructor = Vue.extend(app)
    const subject = new Constructor().$mount()
    subject.newTodo = 'test'
    let testAddTodo = subject.$options.methods.addTodo.bind(subject)
    testAddTodo()
    let testRemoveTodo = subject.$options.methods.removeTodo.bind(subject)
    testRemoveTodo(subject.todos[0])
    expect(subject.todos).to.be.empty
  });

  it("edits todo's in list", function() {
    const Constructor = Vue.extend(app)
    const subject = new Constructor().$mount()
    subject.newTodo = 'test'
    let testAddTodo = subject.$options.methods.addTodo.bind(subject)
    testAddTodo()
    let testEditTodo = subject.$options.methods.editTodo.bind(subject)
    testEditTodo(subject.todos[0])
    let testDoneEdit = subject.$options.methods.doneEdit.bind(subject)
    subject.todos[0].title = 'edit'
    testDoneEdit(subject.todos[0])
    expect(subject.todos[0].title).to.equal('edit')
  });

  it("can cancel edit if needed", function() {
    const Constructor = Vue.extend(app)
    const subject = new Constructor().$mount()
    subject.newTodo = 'test'
    let testAddTodo = subject.$options.methods.addTodo.bind(subject)
    testAddTodo()
    let testEditTodo = subject.$options.methods.editTodo.bind(subject)
    testEditTodo(subject.todos[0])
    let testCancelEdit = subject.$options.methods.cancelEdit.bind(subject)
    testCancelEdit(subject.todos[0])
    expect(subject.todos[0].title).to.equal('test')
    expect(subject.editedTodo).to.equal(null)
  });

  it("updates storage whenever changes are made to todo's", function() {
    const Constructor = Vue.extend(app)
    const subject = new Constructor().$mount()
    console.log(app)
    //sinon.spy(todoStorage)
  })

});
