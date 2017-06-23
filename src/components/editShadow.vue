<template>
    <div class="shadow" v-show="isactive">
        <div class="model">
            <p>是否删除这条收藏？</p>
            <div>
                <button class="cancel" @click="cancel">取消</button>
                <button class="sure" @click="sure">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default{
        data(){
            return{
                isactive:false,
                index:'',
                num:0,
                len:this.$parent.list.length
            }
        },
        methods:{
            cancel:function(){
                this.isactive=false;
            },
            sure:function(){
                this.isactive=false;
                let obj=this.$parent.$refs.editli[this.index].$el;
                $(obj).remove();
                this.num++;
                if(this.num==this.len){
                    this.$parent.$refs.mytitle.name='';
                    this.$parent.noComment=true;
                }
            }
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
        left:0;
        top:0;
        z-index: 100;
        /*display: none;*/
    }

    /*模态框样式*/
    .model{
        width:75%;
        height: 9.5rem;
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

    .model>p{
        text-align: center;
        height: 50%;
        font-size: 1.5rem;
        border-bottom: 1px solid #e8e8e8;
        line-height: 4.75rem;
    }

    .model>div{
        height: 50%;
        overflow: hidden;
        border-radius: 10px;
    }

    .model>div>button{
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

    .model>div>button:last-child{
        border-left:1px solid #e8e8e8;
    }

    @media (max-width: 480px){
        .model>p,.model>div>button{
            font-size: 14px;
        }
    }
</style>