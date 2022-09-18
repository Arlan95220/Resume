function chinese(){
personal.style.letterSpacing = '0.15vw';
per.innerHTML = " 個人簡介 ";
por.innerHTML = " 作品集 ";
con.innerHTML = " 聯絡資訊 ";
inone.innerHTML = "您好，我是中原大學資訊管理系學生，歡迎來到我的履歷網站。<br>如果您滿意我的作品，歡迎聯絡我們。所有商品皆為客製化設計，針對您的特色與需求量身訂製。<br><br>";
intwo.innerHTML = "專長:";
inthree.innerHTML = "工作方案(包括但不限於):";
infour.innerHTML = "一頁式網站<br>個人網站<br>購物車網站<br>形象網站<br>UI設計<br>網頁後端(jsp & MySQL)<br>";
call.innerHTML="<b>信箱:</b> zx24969557@gmail.com<br><b>LINE:</b> ZX24969557<br><b>手機:</b> 0981681067"
}
function english(){
personal.style.letterSpacing = '0.05vw';
per.innerHTML = " Personal ";
por.innerHTML = " Portfolio ";
con.innerHTML = " Contact info ";
inone.innerHTML = "Hello, I'm currently a Junior at Chung Yuan Christian University, major in Department of Information Management, Welcome to my resume website.<br>If you like my work, please contact us. All products are customized design, tailored to your characteristics and needs.<br><br>";
intwo.innerHTML = "SKILLS:";
inthree.innerHTML = "PROJECTS(Including but not limited to):";
infour.innerHTML = "One-page Web<br>Personal Web<br>Shopping Cart Site<br>Business Web Design<br>UI Design<br>Web backend(jsp & MySQL)<br>";
call.innerHTML="<b>E-mail:</b> zx24969557@gmail.com<br><b>LINE:</b> ZX24969557<br><b>Tel:</b> 0981681067"
}
function I(){
personal.style.display="block";
portfolio.style.display="none";
contact.style.display="none";
}
function II(){
personal.style.display="none";
portfolio.style.display="block";
contact.style.display="none";
}
function III(){
personal.style.display="none";
portfolio.style.display="none";
contact.style.display="block";
}