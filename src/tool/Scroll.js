import $ from 'jquery'


export function myScroll(obj, json){
  $(window).on('scroll', () => {
    var sumHeight = $(document).height()
    var clientHeight = $(window).height()
    var scrollTop = $(window).scrollTop()
    var n = (clientHeight + scrollTop) / sumHeight
    if (n >= 0.95 && !obj.lock) {
      obj.lock = true
      if (obj[json['data_name']].length > json['num']) return
      obj[json['fn_name']]()
      obj.lock = false
    }
  })
}

export function unScroll(){
  $(window).off()
}
