import Home from './Home.vue';

frappe.provide('frappe.PosApp');


frappe.PosApp.posapp = class {
    constructor({ parent }) {
        this.$parent = $(document);
        this.page = parent.page;
        this.make_body();

    }
    make_body () {
        this.$el = this.$parent.find('.main-section');
        this.vue = new Vue({
            vuetify: new Vuetify(
                {
                    rtl: frappe.utils.is_rtl(),
                    theme: {
                        themes: {
                            light: {
                                background: '#FFFFFF',
                                primary: '#048AFF',
                                secondary: '#048AFF',
                                accent: '#048AFF',
                                success: '#4CBB17',
                                info: '#048AFF',
                                warning: '#00BAD4',
                                error: '#DC143C',
                                orange: '#E65100',
                                golden: '#048AFF',
                                badge: '#048AFF',
                                customPrimary: '#085294',
                                black: '#000000',
                            },
                        },
                    },
                }
            ),
            el: this.$el[0],
            data: {
            },
            render: h => h(Home),
        });
    }
    setup_header () {

    }

};
