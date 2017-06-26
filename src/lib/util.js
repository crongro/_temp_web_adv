/* DISPATCHER */
export class Dispatcher {
  register(fnlist) {
    this.fnlist = fnlist;
  }
  emit(o) {
    this.fnlist[o.type].apply(null, o.data);
  }
}
