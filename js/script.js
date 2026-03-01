let interviewList = [];
let rejectedList = [];
let total = document.getElementById('total');
const interview = document.getElementById('interview');
const rejected = document.getElementById('rejected');

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allCard = document.getElementById('allCard');
const mainContainer = document.querySelector('main');
// console.log(mainContainer);

function countNumber (){
    total.innerText = allCard.children.length;
    // interview.innerText = interviewList.length;
    // rejected.innerText = rejectedList.length;

}
countNumber();

function toggleStyle (id){
    // console.log("clicked");
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')

    allFilterBtn.classList.add('bg-gray-300', 'text-[#64748B]')
    interviewFilterBtn.classList.add('bg-gray-300', 'text-[#64748B]')
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-[#64748B]')

        
    const selected = document.getElementById(id);
    // console.log(selected);
    selected.classList.remove('bg-gray-300', 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]', 'text-white');
}

// let card1 = document.getElementById('noApplied-filter-btn');
// card1.innerText = "hello labib"

const interviewElement = document.getElementById('interview');
const rejectedElement = document.getElementById('rejected-btn');
const btnInterviewClick = document.getElementById('btn-interviwe-click');
const btnRejectedClick = document.getElementById('btn-rejected-click');

let counter = 0;
let rejecte = 0;

btnInterviewClick.addEventListener('click', function (){
   counter++;
//    if(rejecte > 0){
//         rejecte--;
//    }
   interviewElement.innerText = counter;
//    rejectedElement.innerText = counter;
})

btnRejectedClick.addEventListener('click', function(){

    if(counter > 0){
        counter--;
        rejecte++;
    }
   interviewElement.innerText = counter;
   rejectedElement.innerText = rejecte;
})

document.getElementById('btn-interviwe-click')
.addEventListener('click', function(){
    // console.log('btn clicked')

    const changeN = document.getElementById('rejected-filter-click')
    // console.log(changeN)
    changeN.innerText = 'INTERVIWE';

})

document.getElementById('btn-rejected-click').addEventListener('click', function(){
    // console.log('btn clicked')

    const changeN = document.getElementById('rejected-filter-click')
    // console.log(changeN)
    changeN.innerText = 'REJECTED';

})

// 2nd

document.getElementById('btn-interviwe-click-2').addEventListener('click', function(){
    // console.log('btn clicked')

    const changeN = document.getElementById('rejected-filter-click-3')
    // console.log(changeN)
    changeN.innerText = 'INTERVIWE';

})

document.getElementById('btn-rejected-click-1').addEventListener('click', function (){
    // console.log('btn clicked')

    const changeN = document.getElementById('rejected-filter-click-3')
    // console.log(changeN)
    changeN.innerText = 'REJECTED';

})


// 3rd

document.getElementById('btn-interviwe-click-5').addEventListener('click', function(){
    const changeN = document.getElementById('rejected-filter-click-4')
      changeN.innerText = 'INTERVIWE';

})

document.getElementById('btn-rejected-click-6').addEventListener('click', function (){
    // console.log('btn clicked')

    const changeN = document.getElementById('rejected-filter-click-4')
    // console.log(changeN)
    changeN.innerText = 'REJECTED';

})
// 4t btn

document.getElementById('btn-interviwe-click-8').addEventListener('click', function(){
    const changeN = document.getElementById('rejected-filter-click-7')
      changeN.innerText = 'INTERVIWE';

})

document.getElementById('btn-rejected-click-9').addEventListener('click', function (){
    // console.log('btn clicked')

    const changeN = document.getElementById('rejected-filter-click-7')
    // console.log(changeN)
    changeN.innerText = 'REJECTED';

})

// 4t btn

document.getElementById('btn-interviwe-click-11').addEventListener('click', function(){
    const changeN = document.getElementById('rejected-filter-click-10')
      changeN.innerText = 'INTERVIWE';

})

document.getElementById('btn-rejected-click-12').addEventListener('click', function (){
    // console.log('btn clicked')

    const changeN = document.getElementById('rejected-filter-click-10')
    // console.log(changeN)
    changeN.innerText = 'REJECTED';

})

// 5th btn

document.getElementById('btn-interviwe-click-14').addEventListener('click', function(){
    const changeN = document.getElementById('rejected-filter-click-13')
      changeN.innerText = 'INTERVIWE';

})

document.getElementById('btn-rejected-click-15').addEventListener('click', function (){
    // console.log('btn clicked')

    const changeN = document.getElementById('rejected-filter-click-13')
    // console.log(changeN)
    changeN.innerText = 'REJECTED';

})

// 6th btn

document.getElementById('btn-interviwe-click-17').addEventListener('click', function(){
    const changeN = document.getElementById('rejected-filter-click-16')
      changeN.innerText = 'INTERVIWE';

})

document.getElementById('btn-rejected-click-18').addEventListener('click', function (){
    // console.log('btn clicked')

    const changeN = document.getElementById('rejected-filter-click-16')
    // console.log(changeN)
    changeN.innerText = 'REJECTED';

})


// 7th btn

document.getElementById('btn-interviwe-click-20').addEventListener('click', function(){
    const changeN = document.getElementById('rejected-filter-click-19')
      changeN.innerText = 'INTERVIWE';

})

document.getElementById('btn-rejected-click-21').addEventListener('click', function (){
    // console.log('btn clicked')

    const changeN = document.getElementById('rejected-filter-click-19')
    // console.log(changeN)
    changeN.innerText = 'REJECTED';

})




