<template>
    <div>
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
    </div>
</template>

<script>
var component = {
    props: ['title', 'description']
} 

module.exports = component
</script>
