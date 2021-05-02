function init() {
    console.log(123);
}
//因为界面加载原因，我们延迟500ms再调用init
setTimeout("init()", 500)