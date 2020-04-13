module.exports =app => ({
    index: async ctx => {
        //ctx.body = 'Ctrl Index'
        ctx.body  = await app.$model.user.findAll()
    },
    detail: async ctx => {
        ctx.body = 'Ctrl Detail'
    }
})