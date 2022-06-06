<template>
  <custom-section 
    :is-last-custom-section='isLastCustomSection' 
    :section-heading="sectionHeading"
  >
    <div class="showcase">
      <button 
        class="showcase__chevron showcase__chevron--left" 
        @click="handleClickButtonLeft"
      >
        <g-image src="~/assets/img/chevron.svg" />
      </button>
      <div class="showcase__items">
        <a 
          :class="[ 
            'showcase__items__item',
            { 'showcase__items__item--active': index === showcaseItemCurrent },
            { 'showcase__items__item--inactive': index !== showcaseItemCurrent },
            { 'showcase__items__item--active--from-left': index === showcaseItemCurrent },
            { 'showcase__items__item--inactive--to-left': index === !showcaseItemCurrent },
          ]" 
          v-for="( item, index ) in showcaseItems" 
          :href="item.node.link" 
          :id="`${ showcaseItemType }-${ index }`" 
          :key="item.node.name"
        >
          <g-image
            :alt="item.node.name" 
            :class="[
              { 'showcase__items__item__img--active': index === showcaseItemCurrent },
            ]"
            :src="require( `~/assets/img/${ showcaseItemType }-${ item.node.img }.jpg` )" 
          />
        </a>
      </div>
      <button 
        class="showcase__chevron showcase__chevron--right" 
        @click="handleClickButtonRight"
      >
        <g-image src="~/assets/img/chevron.svg" />
      </button>
    </div>
  </custom-section>
</template>

<script>
import CustomSection from '~/components/CustomSection';

export default {
  components: { CustomSection },
  watch: {
    showcaseItemCurrent(){
      this.showcaseItemAfter = this.getShowcaseItemAfter()
      this.showcaseItemBefore = this.getShowcaseItemBefore()
    }
  },
  data(){
    return { 
      showcaseButtonClicked: '',
      showcaseItemCurrent: 0,
      showcaseItemAfter: this.getShowcaseItemAfter(),
      showcaseItemBefore: this.getShowcaseItemBefore(),
    }
  },
  methods: {
    decrementShowcaseItemCurrent(){
      if( this.showcaseItemCurrent === 0 ) return this.showcaseItemCurrent = this.showcaseItems.length - 1
      return this.showcaseItemCurrent -= 1
    },
    getShowcaseItemBefore(){
      if(this.showcaseItemCurrent === 0) return this.showcaseItems.length - 1
      return this.showcaseItemCurrent - 1
    },
    getShowcaseItemAfter(){
      if(this.showcaseItemCurrent === this.showcaseItems.length - 1) return 0
      return this.showcaseItemCurrent + 1
    },
    handleClickButtonLeft(){
      this.decrementShowcaseItemCurrent()
      this.showcaseButtonClicked = 'left'
    },
    handleClickButtonRight(){
      this.incrementShowcaseItemCurrent()
      this.showcaseButtonClicked = 'right'
    },
    incrementShowcaseItemCurrent(){
      if( this.showcaseItemCurrent === this.showcaseItems.length - 1 ) return this.showcaseItemCurrent = 0
      return this.showcaseItemCurrent += 1
    },
  },
  props: ['isLastCustomSection', 'sectionHeading', 'showcaseItems', 'showcaseItemType'],
}
</script>
