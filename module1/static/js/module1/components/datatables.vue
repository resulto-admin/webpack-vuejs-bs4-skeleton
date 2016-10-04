<template>
    <table class="table table-striped table-bordered" cellspacing="0" width="100%"></table>
</template>

<script>
    var $ = require('jquery')

    var component = {
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
                handler: function( value, old_value ) {
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
module.exports = component
</script>
