//돋보기 버튼
const searchEl = document.querySelector('.search');
const searchInput = document.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInput.focus();
});

//focus가 들어가면 class="focused"추가
searchInput.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInput.setAttribute('placeholder', '통합검색');
});

//focus가 나가면 class="focused"제거
searchInput.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInput.setAttribute('placeholder', '');
});


// 스와이퍼 슬라이드
new Swiper('.promotion-slide', {
  loop: true,
  slidesPerView: 1, //한번에 보여줄 슬라이드 갯수
  centeredSlides: true,
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
  },
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.promotion .swiper-next', //이전버튼
    prevEl: '.promotion .swiper-prev', //다음버튼
  },

  // 반응형 설정
  breakpoints: { //반응형
    // 화면의 넓이가 1200px 이상일 때
  1200: { //pc
    slidesPerView: 3,
    spaceBetween: 40
    },
    // 화면의 넓이가 400px 이상일 때
  400: { //tab
    slidesPerView: 1,
    spaceBetween: 40
    }
  }
});


// 탑버튼 -----------------------------------------------------------------------------
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500) {
    //탑 버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x : 0
    });
  } else{
    //탑 버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x : 100
    });
  }
},300));

//top버튼을 클릭하면 상단으로 이동
toTopEl.addEventListener('click', function(){
  gsap.to(window, 0.7,{
    scrollTo : 0
  })
});
// -------------------------------------------------------------------

// 이케아로 꾸민 우리집
const searchE2 = document.querySelector('.search');
const hoverInput = document.querySelector('input');

searchE2.addEventListener('hover',function(){
  hoverInput.focus();
});

//focus가 들어가면 class="focused"추가
hoverInput.addEventListener('focus', function(){
  searchE2.classList.add('focused');
  hoverInput.setAttribute('placeholder', '통합검색');
});

//focus가 나가면 class="focused"제거
hoverInput.addEventListener('blur', function(){
  searchE2.classList.remove('focused');
  hoverInput.setAttribute('placeholder', '');
});


// 더보기 버튼을 클릭하면 보이게
function showMore(){
  const hide = document.querySelectorAll('.hide');
  const first = Array.from(hide).slice(0,4); //한줄에 1개씩 보이게
  first.forEach(item =>{
    item.classList.remove('hide');
  });
  if(hide.length <= 4){
    hideMoreButton();
  }
}
// 보일 내용이 끝나면 더보기 버튼이 사라짐.
function hideMoreButton(){
  document.getElementById('moreBtn').classList.add('hide');
}


