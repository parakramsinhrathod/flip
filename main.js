gsap.registerPlugin(Flip)
const items = gsap.utils.toArray('aside .item'),
      stack = document.querySelector('.stack-container'),
      aside = document.querySelector('aside')

items.forEach(item => {
    item.addEventListener('click', e => {
        // get the state
        let state = Flip.getState(item,stack)

        // move item to .stack-container
  
            item.parentNode = stack
            stack.appendChild(item)
        

        Flip.from(state, {
            duration: 1.5, 
            scale: true, 
            ease: 'elastic.out(1,0.7)'
        })

    })
})




