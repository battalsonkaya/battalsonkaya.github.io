$('.product-list').infiniteScroll({
    path: 'page{{#}}.html',
    append: '.post',
    history: 'replace',
    historyTitle: true,
    hideNav: '.pagination__next',
    status: '.page-load-status',
    
});