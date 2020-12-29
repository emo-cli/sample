import store from '../store/index'

(function (document) {
    let app = {
        // Application Constructor
        initialize: function() {
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        },
        // deviceready Event Handler
        onDeviceReady: function() {
            store.commit('onDeviceReady')
        }
    };
    app.initialize();
}(document))



