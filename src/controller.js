import BlogListView from './view/bloglistview.js';
import LikeListView from './view/likelistview.js';
import Store from './store.js';
import {Dispatcher} from './lib/util';

export default function Controller(initData) {

    const dispatcher  = new Dispatcher();
    const store       = new Store(dispatcher);
    const listView     = LikeListView(dispatcher);
    const blogListView = new BlogListView(dispatcher, initData);

    dispatcher.register({
      "CLICK_LIKE" : function(className, str, target) {
        store.changeData(className, str);
        blogListView.toggleLikeView(target, className);
      },

      "INSERT_POSTS" : function(posts) {
        blogListView.insertPosts(posts);
      }.bind(this),

      "CHANGE_LIKE_LIST" : function() {
        listView.renderListView(store.likedSet);
      }
    })
}