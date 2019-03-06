// Your code goes here
let message = document.getElementById('message')
console.log('message', message)
let anchorLinks = document.querySelectorAll('.nav-link')
anchorLinks.forEach((link, currentIndex) => {
    link.addEventListener('mouseover', function(e){
        e.preventDefault();
        e.target.classList.add('scale')
        e.target.style.transform = `translateX(10px)`
        e.target.style.transition = `all 0.5s ease`
    })
    link.addEventListener('mouseout', function(e){
        e.target.classList.remove('scale')
        e.target.style.transform = `translateX(-10px)`
        e.target.style.transition = `all 0.5s ease`
    })

    

  } , 'thisArg'
)

let contentSections = document.querySelectorAll('.content-section')
contentSections.forEach((section) => {
    let children = Array.from(section.children)
    children.forEach(item => {
        item.draggable = true;
        item.addEventListener('dragstart', function(e){
            console.log('item', item)
            item.style.transition = `all 1s ease`;
        })

        item.addEventListener('dragend', function(e){
            if(item.style.order == 0 ){
                item.style.order = 1;
             }else{
                item.style.order = item.style.order * -1;
             }
        })

        item.addEventListener('focus', function(e){
            item.style.border = '1px dash blue'
            item.style.color = 'red'
            //message.textContent = item.textContent
        })
    })
})

let body = document.getElementsByTagName("body")[0]
body.addEventListener('wheel', function(e){
    anchorLinks.forEach((link, currentIndex) => {
        link.style.transition = `all 1s ease`;
        if(e.deltaY < 0){
            link.style.fontSize = '30px';
        }else{
            link.style.fontSize = '12px'
        }
    })
})


function handleResize(){
    console.log(`Window is being resized to ${document.body.clientWidth}px width and ${document.body.clientHeight}px height`);
}

/*
message.addEventListener('keydown', function(e){
    e.target.classList.remove('scale')
})
*/