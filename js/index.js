// Your code goes here

let anchorLinks = document.querySelectorAll('.nav-link')
anchorLinks.forEach((link, currentIndex) => {
    // 1. Mouseover Event
    // Prevent Default
    link.addEventListener('mouseover', function(e){
        e.preventDefault();
        e.target.classList.add('scale')
        e.target.style.transform = `translateX(10px)`
        e.target.style.transition = `all 0.5s ease`
    })
    
     // 2. Mouseout Event
    link.addEventListener('mouseout', function(e){
        e.target.classList.remove('scale')
        e.target.style.transform = `translateX(-10px)`
        e.target.style.transition = `all 0.5s ease`
    })

     // 3. Double Click Event
    link.addEventListener('dblclick', function(e){
        e.target.style.backgroundColor = `red`
        e.target.style.transition = `all 0.5s ease`
    })
    
  } , 'thisArg'
)

let contentSections = document.querySelectorAll('.content-section')
contentSections.forEach((section) => {
    // Prevent propagation
    section.addEventListener('dragstart', function(e){
        console.log('Should not see this ::: parent constainer dragstart captured')
    })

    let children = Array.from(section.children)
    children.forEach(item => {
        item.draggable = true;
        // 4. Drags/Drop 
        // Prevent propagation
        item.addEventListener('dragstart', function(e){
            e.stopPropagation();
            console.log('item', item)
            item.style.border = "1px solid red"
            console.log('child element dragstart captured')
        })

        item.addEventListener('dragend', function(e){
            if(item.style.order == 0 ){
                item.style.order = 1;
             }else{
                item.style.order = item.style.order * -1;
             }
             item.style.border = "none"
        })
    })
})


// 5. Wheel Event
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

// 6. Resize Event
function handleResize(){
    console.log(`Window is being resized to ${document.body.clientWidth}px width and ${document.body.clientHeight}px height`);
}

let message = document.getElementById('message')
console.log('message', message)

let messageInput = message.getElementsByTagName('input')
console.log('messageInput', messageInput)

// 7. Focus Event
inputmessage.addEventListener('focus', function(e){
    e.target.style.borderColor = 'aliceblue';
    e.target.style.backgroundColor = 'aliceblue';
})

// 8. Keydown Event
inputmessage.addEventListener('keydown', function(e){
    console.log(e)
    let str = 'aeiou'
    e.target.style.transition = "all 0.3s ease"
    if(str.includes(e.key)){
        e.target.style.fontSize = "40px";
        e.target.style.color = 'red';
    }else{
        e.target.style.fontSize = "initial";
        e.target.style.color = 'initial';
    }
})

// 9.Load Event
window.addEventListener('load', function(e){
    document.getElementById('inputmessage').focus();
})
// 10.Scroll Event
window.addEventListener('scroll', function(e){
    document.getElementById('message').style.backgroundColor = "red";
})