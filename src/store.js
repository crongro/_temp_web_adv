/* STORE */
export default class Store {
  constructor(dispatcher) {
   //DATA
    this.likedSet = new Set();
    this.dispatcher = dispatcher;
    
  }
  changeData(className, str) {
    if(className === 'like') this.likedSet.add(str);
    else this.likedSet.delete(str);
    this.dispatcher.emit( { type : 'CHANGE_LIKE_LIST', data : []},);
  }
}