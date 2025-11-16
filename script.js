let currentPageId = 'page1';
const btnNo = document.getElementById('btnNo');
let noClickCount = 0;

const failGifs = [
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExem1qa3A3ZHN6eGQzaXRwcDhlenJ6eHhrYm0zODhmem9lNzh0cjZvbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MmO2gi6gFogy0JfnqS/giphy.gif',
  'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3lmZDhoYXpjMWltMDNyeXYzbW1qbTAwZHFoZmw5cTJ3bzgyOWY0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8ZYZWAbNgk3ncHaQQL/giphy.gif',
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXVlZWV2ZGxyeGVsaTBidHJtOThudjRnbHd4Mzl2NGxtdmk1NzZ1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vgzBFQjGAgjnBftE2F/giphy.gif'
];

// เปลี่ยนหน้า
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  currentPageId = pageId;

  if (pageId === 'page1') {
    btnNo.style.position = 'relative';
    btnNo.style.left = '0';
    btnNo.style.top = '0';
    btnNo.style.zIndex = 'auto';
  }
}

// ปุ่ม Yes
document.getElementById('btnYes').addEventListener('click', () => { 
  showPage('page2'); 
});

// ปุ่ม No หนีเมาส์
btnNo.addEventListener('mouseenter', () => {
  const vw = window.innerWidth, vh = window.innerHeight;
  const rect = btnNo.getBoundingClientRect();
  btnNo.style.position = 'fixed';
  btnNo.style.left = Math.random() * (vw - rect.width) + 'px';
  btnNo.style.top = Math.random() * (vh - rect.height) + 'px';
  btnNo.style.zIndex = '9999';
});
btnNo.addEventListener('click', () => { 
  noClickCount++; 
  if (noClickCount >= 1) showPage('pageNo'); 
});

// กลับไปหน้าแรก
document.getElementById('btnBackToStart').addEventListener('click', () => {
  btnNo.style.position = 'relative'; 
  btnNo.style.left = '0'; 
  btnNo.style.top = '0'; 
  btnNo.style.zIndex = 'auto';
  noClickCount = 0; 
  showPage('page1');
});

// ปุ่มถัดไป
document.getElementById('btnNext').addEventListener('click', () => { 
  showPage('page3'); 
});

// ตรวจสอบรหัสผ่าน
document.getElementById('btnSubmitPassword').addEventListener('click', () => {
  const password = document.getElementById('passwordInput').value;
  const failMessage = document.getElementById('failMessage');
  const failGif = document.getElementById('failGif');

  if (password === 'L0VEY0U') {
    failMessage.style.display = 'none';
    document.getElementById('passwordInput').value = '';
    showPage('page4');
  } else {
    // สุ่มสติกเกอร์
    failGif.src = failGifs[Math.floor(Math.random() * failGifs.length)];
    failMessage.style.display = 'block';
    failGif.style.display = 'block';  // ✅ เพิ่มเพื่อให้แสดงสติกเกอร์
  }
});

// Enter key สำหรับรหัสผ่าน
document.getElementById('passwordInput').addEventListener('keypress', e => { 
  if (e.key === 'Enter') document.getElementById('btnSubmitPassword').click(); 
});

// กล่องกิจกรรม
document.querySelectorAll('.activity-box').forEach(box => {
  box.addEventListener('click', () => { 
    showPage('activity' + box.getAttribute('data-activity')); 
  });
});

// ปุ่มย้อนกลับ
['btnBack1','btnBack2','btnBack3'].forEach(id => { 
  document.getElementById(id).addEventListener('click', () => { 
    showPage('page4'); 
  }); 
});

const activity2Music = document.getElementById("activity2Music");

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');

  // หยุดเพลงทุกหน้า
  if (activity2Music) activity2Music.pause();

  // เล่นเพลงเฉพาะ activity2
  if (pageId === "activity2") {
    activity2Music.currentTime = 0; 
    activity2Music.play();
  }
}
