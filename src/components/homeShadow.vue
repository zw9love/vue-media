<template>
    <div class="shadow" :style="[heightObj,topObj]" :class="{show:isactive}">
        <div class="model">
            <div class="model_info">
                <p>退出登录</p>
                <p>退出当前账号，将不能同步收藏发布评论和分享等</p>
            </div>
            <div class="model_button">
                <button class="cancel" @click="cancelClick">取消</button>
                <button class="sure" @click="sureClick">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from "jquery"

    export default{
        methods:{
            //点击确定按钮的时候
            sureClick(){
                this.isactive=false;
                this.wrapper.removeClass('noscroll');
            },
            //点击取消按钮的时候
            cancelClick(){
                this.isactive=false;
                this.wrapper.removeClass('noscroll');
            }
        },
        data(){
            return{
                heightObj:{
                    height:this.windowHeight+'px'
                },
                topObj:{
                    top:'px'
                },
                isactive:false
            }
        },
        created(){
            let self=this;
            //滚动轮发生变化的时候
            this.window.scroll(function(){
                self.topObj.top=$(this).scrollTop()+'px'
            });
        }

    }
</script>
<style scoped>
    /*阴影块样式*/
    .shadow{
        width:100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        position: fixed;
        left:50%;
        top:0;
        transform:translateX(-50%);
        -webkit-transform:translateX(-50%);
        z-index: 100;
        display: none;
    }

    /*模态框样式*/

    .model{
        width:75%;
        height: 15rem;
        background: #fff;
        position: absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        -webkit-transform:translate(-50%,-50%);
        z-index: 101;
        max-width: 522px;
        border-radius: 10px;
    }

    .model>div.model_info{
        height: 70%;
        color:#333;
        padding:1rem 3rem;
        box-sizing:border-box;
        font-size: 1.5rem;
    }

    .model>div.model_info>p{
        text-align: center;
        line-height: 2.2rem;
    }

    .model>div.model_info>p:last-child{
        text-align: left;
        margin-top:1.5rem;
    }

    .model>div.model_button{
        height: 30%;
        overflow: hidden;
        border-radius: 0 0 10px 10px;
        border-top:1px solid #e8e8e8;
    }

    .model>div.model_button>button{
        float: left;
        display: block;
        height: 100%;
        width:50%;
        box-sizing:border-box;
        text-align: center;
        line-height: 4.75rem;
        font-size: 1.5rem;
        color:#e92230;
        border:none;
        outline: none;
        cursor: pointer;
        background: #fff;
    }

    .model>div.model_button>button:last-child{
        border-left:1px solid #e8e8e8;
    }

    @media (max-width: 480px){
        /*模态框480以下样式*/

        .model>div.model_info>p,.model>div.model_button>button{
            font-size: 16px;
        }

        .media_info_movie>span{
            border-left:14px solid #fff;
            border-right:0px solid transparent;
            border-top:7px solid transparent;
            border-bottom:7px solid transparent;
        }

        .model>div.model_info>p:last-child{
            margin-top:0.8rem;
        }
    }
</style>