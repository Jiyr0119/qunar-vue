<template>
  	<div class="more-product">
        <div class="more-ticket-play">
            <a href="#" class="more-link">
                <strong class="boldest">&gt;</strong>
                <span class="bolder">&gt;</span>
                <em class="bold">&gt;</em>
                更多门票玩乐产品
                <em class="bold">&lt;</em>
                <span class="bolder">&lt;</span>
                <strong class="boldest">&lt;</strong>
        
            </a>
        </div>
        <div class="bottom">
            <p class="bottom-font"><span class="bottom-bg-img"></span><em class="bottom-price-font">票面价</em>是指通过景区指定窗口售卖的纸质门票上标注的价格</p>
        </div>
    </div>  
</template>
<script>

export default {

    data () {
        return {
           
        }
    }
}
</script>

<style scoped>
    .more-ticket-play{
        display: block;
        font-size: .44rem;
        line-height: .94rem;
        text-align: center;
        margin: .1rem .2rem 0;
        color: #fff;
        background: #fc0;
        border-bottom: .08rem solid #ffa200;
        border-radius: .12rem;
    }
    .more-link{
        color: #fff;
    }
    .boldest{
        color: #ffeca1;
    }
    .bolder{
        color: #ffde5a;
    }
    .bold{
        color: #ffd52d;
    }
    .bottom{
        padding: .02rem 0;
        width: 100%;
    }
    .bottom-font{
        position: relative;
        font-size: .24rem;
        line-height: .32rem;
        margin-top: .02rem;
        padding: .16rem .2rem;
        color: #fff;
        background: rgba(0,0,0,.4);
        text-indent: .3rem;
    }
    .bottom-bg-img{
        position: absolute;
        top: .18rem;
        left: .2rem;
        width: .24rem;
        height: .24rem;
        
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAF+SURBVEiJvZbhbcIwEIU/EAN4hHSDbFCyQToBygTtBrQbtBNETBA2CB2gwhvABvUG7Q/fYSd1Egq0T4oIZ997sZ9zl9nXB1MogXsg78Ut8A5sx5LnI2Nr4BNohNwCO7msxBqZsx4iWSRiOVADGfAKvAFuIN8Aj8ATfqWViJ8w621RDrTAEXiQ33OQ4VeTAUUsEgsY4CCkReKpjZAg4qnxVkTudDz2oJZgihz86pZy9Q2nl1trUD1Y4vdwiBy8uc/RfQoO70MrnDvdIjW1GEj8LdTHSreoBDY3Ike4SvAe5HiD7FiGoCEYPQYrnPlCbjQ4BTM9pcNlxt7km+BfBPRYps72pVAuN8fvl/sDAQdY3aItsLqhwEo4Tx5sCGXgWijPJhbYiWLN+UcxBSMcW+HsnKKKUBEvEYlzKw3GAloNM0LZ7aOKkyPEOZ2C2X8PLKHg7fGtMF7NkW4TMjJnL/87zQZ+drQYa3wrNIQ+rE9mCP3B4VvrS4pkTEBx1VfFN1IoZIDYRhp5AAAAAElFTkSuQmCC) 0 0/contain no-repeat ;
    }
    .bottom-price-font{
       color: #ffcd00;
    }
</style>