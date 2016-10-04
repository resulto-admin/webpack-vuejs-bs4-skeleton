var template = require('./datatables.html');

var $ = require('jquery');

var component = {
    template: template,
    props: ['options', 'status', 'data'],
    mounted: function() {
        this.$nextTick(function() {
            // Equivalent to domReady/jquery.ready
            this.dataTable = $(this.$el).DataTable(this.options);
            this.loadData();
        });
    },
    watch: {
        data: {
            handler: function(value, old_value) {
                this.loadData();
            },
            immediate: true
        }
    },
    methods: {
        loadData: function() {
            if (!this.dataTable) {
                return;
            }
            this.dataTable.clear().rows.add(this.data).draw();
        }
    }
};

module.exports = component;
