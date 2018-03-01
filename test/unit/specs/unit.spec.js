import Vue from 'vue'
import app from '@/App';

describe('app.vue', () => {

  // beforeEach(() => {
  //   const Constructor = Vue.extend(app)
  //   const subject = new Constructor().$mount()
  // });

  it("adds todo's to list", function() {
    const Constructor = Vue.extend(app)
    const subject = new Constructor().$mount()
    subject.newTodo = 'test'
    let testAddTodo = subject.$options.methods.addTodo.bind(subject)
    testAddTodo()
    expect(subject.todos[0].title).to.equal('test')
  });

});
