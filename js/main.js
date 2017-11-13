/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #1 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var demoApp1 = new Vue({

  el: '#demo-app-1',

  data: {
    msg: 'Hello, world!'
  },

  methods: {
    setMessage: function(event) {
      this.msg = event.target.value;
    }
  }

})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #2 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var userDataForApp2 = {
  name: 'Kate',
  country: 'Russia',
  city: 'Perm'
}

var demoApp2 = new Vue({
  el: '#demo-app-2',

  data: userDataForApp2,

  methods: {
    factorial: function(number) {
      var result = 1;
      for(var i = 1; i <= number; i++) {
        result = result * i;
      }
      return result;
    }
  }
})

demoApp2.city = 'Moscow';

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #3 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var demoApp3 = new Vue({
  el: '#demo-app-3',

  data: {
    linkAddress: 'https://www.google.ru',
    linkText: 'Это ссылка на Google'
  }
})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #4 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var demoApp4 = new Vue({
  el: '#demo-app-4',

  data: {
    name: 'Kate',
    country: 'Russia'
  },

  template: '<div>Name: {{ name }}, Country: {{ country }}</div>'
})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #5 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var demoApp5 = new Vue({
  el: '#demo-app-5',

  data: {
    counter: 0
  },

  methods: {

    increase: function() {
      this.counter++;
    },

    decrease: function() {
      if ( this.counter > 0 ) {
        this.counter--;
      }
    }
  }
})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #6 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var demoApp6 = new Vue({
  el: '#demo-app-6',

  data: {
    name: 'Ekaterina'
  }
})


/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* app #7 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
