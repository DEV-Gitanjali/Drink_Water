// this method for capture all the element first
const smallCups=document.querySelectorAll('.cup-small')
const Listers=document.getElementById('liters')
const percentage=document.getElementById('percentage')
const remained=document.getElementById('remained')
updateBigCup()

// this method for when you click cup it will be highlight cup
smallCups.forEach((cup,idx)=>{
    cup.addEventListener('click',()=>highlightCups(idx))
})

// this method for if index two are equal or less than total index it will be add full 
function highlightCups(idx)
{
    if(smallCups[idx].classList.contains('full')&& !smallCups[idx].nextElementSibling.classList.contains('full'))
    {
        idx--
    }

    smallCups.forEach((cup,idx2)=>{
        if(idx2<=idx){
            cup.classList.add('full')
        }
        else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

// this method for capture all element of big cup
function updateBigCup(idx){
    const fullCups=document.querySelectorAll('.cup-small.full').length
    const totalCups=smallCups.length

    // this method for it if full cups are 0 then it's not visible & also zero height
    if(fullCups===0)
    {
        percentage.style.visibility='hidden'
        percentage.style.height=0
    }
    // this method for if cups are full then percentage are visible
    else{
        percentage.style.visibility='visible'
        percentage.style.height=`${fullCups/totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`

    }
    
// this method for if totalcups are full then visibility is hidden & height zero
    if(fullCups===totalCups){
        remained.style.visibility='hidden'
        remained.style.height=0
    }
    // if totalcups not equal to fullcups then it will be visible
    else{
        remained.style.visibility='visible'
        Listers.innerText=`${2-(250*fullCups/1000)}`

    }

    


}
