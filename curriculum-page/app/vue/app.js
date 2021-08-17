/* global Vue axios */ //> from vue.html
const $ = sel => document.querySelector(sel)
const GET = (url) => axios.get(url)
// const POST = (cmd,data) => axios.post('/browse'+cmd,data)

const users = new Vue ({

    el:'#app',

    data: {
        list: [],
        user: undefined,
        // order: { amount:1, succeeded:'', failed:'' }
    },

    methods: {

        search: ({target:{value:v}}) => users.fetch(v && '&$search='+v),

        async fetch (etc='') {
            const {data} = await GET(`/backend/userservice/user`)
            users.list = data.value
            // console.log(users.list)
        },

        // async inspect (eve) {
        //     const book = books.book = books.list [eve.currentTarget.rowIndex-1]
        //     const res = await GET(`/Books/${book.ID}?$select=descr,stock,image`)
        //     Object.assign (book, res.data)
        //     books.order = { amount:1 }
        //     setTimeout (()=> $('form > input').focus(), 111)
        // },

        // async submitOrder () {
        //     const {book,order} = books, amount = parseInt (order.amount) || 1 // REVISIT: Okra should be less strict
        //     try {
        //         const res = await POST(`/submitOrder`, { amount, book: book.ID })
        //         book.stock = res.data.stock
        //         books.order = { amount, succeeded: `Successfully ordered ${amount} item(s).` }
        //     } catch (e) {
        //         books.order = { amount, failed: e.response.data.error.message }
        //     }
        // }

    }
})

// initially fill list of books
users.fetch()
