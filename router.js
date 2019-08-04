const express = require('express');
const router = express.Router();
const pagesControllers = require('./controllers/pagesControllers.js')

// 后台页面
router.get('/admin/index', pagesControllers.getAdminIndexPage)
    .get('/admin/categories', pagesControllers.getAdminCategoriesPage)
    .get('/admin/comments', pagesControllers.getAdminCommentsPage)
    .get('/admin/login', pagesControllers.getAdminLoginPage)
    .get('/admin/nav-menus', pagesControllers.getAdminNavMenusPage)
    .get('/admin/password-reset', pagesControllers.getAdminPasswordResetPage)
    .get('/admin/post-add', pagesControllers.getAdminPostAddPage)
    .get('/admin/posts', pagesControllers.getAdminPostsPage)
    .get('/admin/profile', pagesControllers.getAdminProfilePage)
    .get('/admin/settings', pagesControllers.getAdminSettingsPage)
    .get('/admin/slides', pagesControllers.getAdminSlidesPage)
    .get('/admin/users', pagesControllers.getAdminUsersPage)

    // 前台页面
    .get('/', pagesControllers.getIndexPage)
    .get('/detail', pagesControllers.getDetailPage)
    .get('/list', pagesControllers.getListPage)





// 暴露
module.exports = router;