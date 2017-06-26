
export default function LikeListView() {
  return { 
    renderListView (data) {
      const elLikeList = document.querySelector(".like-list > ul");
      let elLikeListSum = "";

      data.forEach( (v) => {
        elLikeListSum += `<li> ${v} </li>`; })
      elLikeList.innerHTML = elLikeListSum;
    }
  }
}