const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            shown: true,
            url: 'http://www.sit.kmutt.ac.th/'
        }
    },
    created(){
        console.log('messsage is '+ this.msg);
    },
    update(){
        console.log('messsage is changed to'+ this.msg);
    }

}
var mountedApp = Vue.createApp(app).mount('#app');