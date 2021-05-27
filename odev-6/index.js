const Koa = require('koa'),
      Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/',ctx => {
    ctx.body = '<h1>Index Sayfası</h1>';
})
router.get('/hakkimda',ctx => {
    ctx.body = '<h1>Hakkımda Sayfası</h1>';
})
router.get('/iletisim',ctx => {
    ctx.body = '<h1>İletişim Sayfası</h1>';
})


app
    .use(router.allowedMethods())
    .use(router.routes())
    .use(require('koa-body')());




app.listen(3000);