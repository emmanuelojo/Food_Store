<template>
    <div id="ShoppingTray">
        <p>Your Tray</p>
        <p>No. of items: {{tray.length}}</p>
        <p>Total: ${{totalPlates}}</p>
    </div>
</template>

<script>
export default {
    name: 'shopping-tray',
    components: {},
    props: ['tray', 'totalPlates'],
    computed: {
    }
}
</script>

<style>
p {
    margin: 0;
}
#ShoppingTray {
    padding: 10px;
    border-radius: 5px;
    background: #494949;
}
</style>