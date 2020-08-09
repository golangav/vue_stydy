const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "算法导论",
        date: "2020-05",
        price: 17,
        count: 1,
      },
      {
        id: 2,
        name: "Linux 编程艺术",
        date: "2020-06",
        price: 80,
        count: 1,
      },
      {
        id: 3,
        name: "算法导论",
        date: "2020-07",
        price: 17,
        count: 1,
      },
      {
        id: 4,
        name: "Python 核心编程",
        date: "2020-08",
        price: 17,
        count: 1,
      },
    ]
  },
  methods: {
    decrementClick(index){
      this.books[index].count --
    },
    incrementClick(index){
      this.books[index].count ++
    },
    removeClick(index) {
      this.books.splice(index,1)
    }
  },
  computed: {
    totalPrice(){
      let totalPrice = 0;
      for (let i=0; i < this.books.length; i++) {
        totalPrice += this.books[i].count * this.books[i].price
      }
      return totalPrice
    }
  },
  filters:{
    showPrice(price){
      return '￥' + price.toFixed(2)
    }
  }
})