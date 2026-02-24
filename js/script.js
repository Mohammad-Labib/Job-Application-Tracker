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

document.getElementById('btn-interviwe-click')
.addEventListener('click', function(){
    // console.log('btn clicked')

    const changeN = document.getElementById('rejected-filter-click')
    // console.log(changeN)
    changeN.innerText = 'INTERVIWE';

})

document.getElementById('btn-rejejcted-click')
.addEventListener('click', function(){
    // console.log('btn clicked')

    const changeN = document.getElementById('rejected-filter-click')
    // console.log(changeN)
    changeN.innerText = 'REJECTED';

})



