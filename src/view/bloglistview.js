//BlogListView
export default class BlogListView {
  constructor(dispatcher, {url}) {
    this.posts = [];
    this.url = url;
    this.dispatcher = dispatcher;
    this.registerEvent();

    this.static_data = {
      'Like' : {
        "like" : { 
            "text" : "찜취소 ", "class" : "unlike"
        },
        "unlike" : { 
            "text" : "찜하기", "class" : "like"
          }
      }
    } 
  }
  
  registerEvent() {
    const elStart = document.querySelector(".start");
    const elUL = document.querySelector(".blogList > ul");

    elStart.addEventListener("click", () => this.getData());

    elUL.addEventListener("click", ({target}) => {
      const className = target.className;
      if(! Object.keys(this.static_data.Like).includes(className)) return;
      const currentText = target.previousElementSibling.textContent;
      this.dispatcher.emit(
          {type : 'CLICK_LIKE', data : [className, currentText, target]}
      );
    });
  }
  
  getData(customFn) {
    const oReq = new XMLHttpRequest();

    oReq.addEventListener("load", () => {
      const parsedData = JSON.parse(oReq.responseText);
      const body = JSON.parse(parsedData.body);

      this.posts = body.map((v) => {
        const title = v.title;
        const link = v.link
        return {title, link};
      });
      
      this.dispatcher.emit({
        type : 'INSERT_POSTS', data : [this.posts]
      })
    });

    oReq.open("GET", this.url );
    oReq.send();
  }


  insertPosts(data) {
    const ul = document.querySelector(".blogList > ul");

    data.forEach((v)=>{
      ul.innerHTML +=
      `<li> 
      <a href=${v.link}>${v.title}</a>
      <div class="like">찜하기</div>
      </li>`;      
    });
  }

  toggleLikeView(target, nextClassName) {
    target.className  = this.static_data['Like'][nextClassName]['class'];
    target.textContent= this.static_data['Like'][nextClassName]['text'];
  }

}