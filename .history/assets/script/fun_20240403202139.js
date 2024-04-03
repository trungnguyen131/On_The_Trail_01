
// // /////////////////////////////////////////////////
// const tabs = document.querySelectorAll('.navi--item');
// const all_content = document.querySelectorAll('.tab-content');
// tabs.forEach((tab, index) => {
//     tab.addEventListener('click', (e) => {
//         all_content.forEach(content=>{content.classList.remove('active')});
//         all_content[index].classList.add('active');
//         all_content[0].classList.add('hidden');
//     })
// })
// // /// //////////////////////// 
// const $element_dots = document.querySelectorAll('.dots-svg');
// const $element_block_blog_share = document.querySelectorAll('.block-blog-share');

// $element_dots.forEach((dots, index) => {
//     $element_dots[index].addEventListener('click', function(e) {
//         if (e.currentTarget.matches(".dots-svg")) {

//             $element_block_blog_share.forEach((blogShare, index2) => {
//                 blogShare.classList.remove('animation'); 
//             });
//             $element_block_blog_share[index].classList.add('animation');
//         }
//     });
//     document.addEventListener('click', handleClickOutDots);
//     function handleClickOutDots(e) {
//         if ( !$element_dots[index].contains(e.target) && !e.target.matches(".dots-svg")) {
//             $element_block_blog_share[index].classList.remove('animation');
//         }
//     }
// })
// // //////////////////////////====modal============

// const $element_overlayBlogs = document.querySelector('#myOverlay');
// const $wrap_box_modal = document.querySelector('.wrap-box-share');

// function closeShare() {
//     document.querySelector('#myOverlay').classList.remove('click_overlay');
//     document.querySelector('.wrap-box-share').classList.remove('show_modal')
// }

// $element_block_blog_share.forEach((items, index) => {
//     items.addEventListener('click', function() {
//         $element_overlayBlogs.classList.add('click_overlay');
//         $wrap_box_modal.classList.add('show_modal');
//     });
// })

// $element_overlayBlogs.addEventListener('click', function(e) {
//     if(e.target == e.currentTarget) {
//         $element_overlayBlogs.classList.remove('click_overlay');
//         $wrap_box_modal.classList.remove('show_modal');
//     }
// })
// // /////////////////===== posts-recent =====================
// const $postsRecent = document.querySelectorAll('.click-to-content');
// const $itemsBlogs = document.querySelectorAll('.for-click-item');

// [...$postsRecent].forEach((itemRecent, index) => {
//     itemRecent.addEventListener('click', function(e) {
//         if (e.currentTarget.matches(".click-blogs2")) {
//             $itemsBlogs[0].classList.add('hidden-blogs');
//             $itemsBlogs[1].classList.add('show-recent');
//         } 
//         else if (e.currentTarget.matches(".click-blogs")) {
//             $itemsBlogs[0].classList.remove('hidden-blogs');
//             $itemsBlogs[1].classList.remove('show-recent');
//         }
//     })
// })


alert("Thoong baos")

