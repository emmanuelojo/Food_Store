<template>
   <div class="Item">

       <div class="image">
           <img :src=food.image>
           <p class="item-name">{{food.title}}</p>
           <p class="item-price">${{food.price}}</p>
       </div>

       <div class="button-container">
           <div id="ItemSizePicker">
               <p>Pick a size</p>
               <select v-model="size">
                   <option v-for="size in this.food.sizes" :key="size">{{size}}</option>
               </select>
           </div>

           <div id="ItemAddButton">
               <button @click="addToTray(food)">Add To Tray</button>
           </div>

       </div>


   </div>
</template>

<script>
    export default {
        name: 'food',
        props: ['food'],
        data() {
            return {
                size: ''
            }
        },
        methods: {
            addToCart(food) {
                if(this.size !== '') {                
                    this.$store.commit({
                        type: 'addToTray',
                        id: food.id,
                        title: food.title,
                        price: food.price
                    })
                }
            }
        }
    }
</script>

<style>
img {
    width: 100%;
}
.Item {
    width: 100%;
    padding: 10px;
}
@media screen and (min-width: 630px) {
    .Item {
        width: 50%;
    }
}
@media screen and (min-width: 940px) {
    .Item {
    width: 33%;
    }
}
.image {
    position: relative;
    color: white;
}
.item-name {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    padding: 10px;
}
.item-price {
    position: absolute;
    bottom: 6px;
    left: 0;
    background: rgb(0,0,0,0.5);
    padding: 10px;
}
.button-container {
    display: flex;
    justify-content:space-between;
}
</style>