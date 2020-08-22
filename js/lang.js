const langEl = document.querySelector('.Language');
const link = document.querySelectorAll('a');
const homeEl = document.querySelector('#home');
const servicesEl = document.querySelector('.services');
const newsEl = document.querySelector('.news');
const adEl = document.querySelector('.ad');
const infoEl = document.querySelector('.info');
const aboutEl = document.querySelector('.about');
const contactEl = document.querySelector('.contact');

const titleEl = document.querySelector('.title');
    
    
		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

        const attr = el.getAttribute('language');

        homeEl.textContent = data[attr].active;
        servicesEl.textContent = data[attr].service;
        newsEl.textContent = data[attr].news;
        adEl.textContent = data[attr].ad;
        infoEl.textContent = data[attr].info;
        aboutEl.textContent = data[attr].about;
        contactEl.textContent = data[attr].contact;

        titleEl.textContent = data[attr].title;

        
        if (data[attr].service == "Khadamaat") {
          document.getElementById("ser").href = "Khadamaat.html";
        } 

        else if (data[attr].service == "خدمات"){
          document.getElementById("ser").href = "ar-services.html";
        }

        if (data[attr].news == "Akhbaar") {
          document.getElementById("ne").href = "Akhbaar.html";
        } 

        else if (data[attr].news == "أخبار"){
          document.getElementById("ne").href = "ar-news.html";
        }

       

        if (data[attr].ad == "Ogeysiis") {
          document.getElementById("adv").href = "Ogeysiis.html";
        } 

        else if (data[attr].ad == "إعلانات"){
          document.getElementById("adv").href = "ar-ad.html";
        }

        

        if (data[attr].info == "Maclumaat") {
          document.getElementById("in").href = "Maclumaat.html";
        } 

        else if (data[attr].info == "معلومات"){
          document.getElementById("in").href = "ar-info.html";
        }

        

        if (data[attr].about == "Khusuusiya") {
          document.getElementById("ab").href = "Khusuusiya.html";
        } 

        else if (data[attr].about == "من نحن"){
          document.getElementById("ab").href = "ar-about.html";
        }

        

        if (data[attr].contact == "Xiriir") {
          document.getElementById("con").href = "Xiriir.html";
        } 

        else if (data[attr].contact == "تواصل معنا"){
          document.getElementById("con").href = "ar-contact.html";
        }

        


        

			});
    });

  
    
  const langm = document.querySelector('.LangPhone');
  const linkm = document.querySelectorAll('a');
  const titlem = document.querySelector('.title');
  const homem = document.querySelector('#home');
  const servicesm = document.querySelector('.services');
  const newsm = document.querySelector('.news');
  const adm = document.querySelector('.ad');
  const infom = document.querySelector('.info');
  const aboutm = document.querySelector('.about');
  const contactm = document.querySelector('.contact');
  
    
		link.forEach(elm => {
			elm.addEventListener('click', () => {
				langm.querySelector('.active').classList.remove('active');
				elm.classList.add('active');

        
        const attr = elm.getAttribute('language');

        homem.textContent = data[attr].active;
        servicesm.textContent = data[attr].service;
        newsm.textContent = data[attr].news;
        adm.textContent = data[attr].ad;
        infom.textContent = data[attr].info;
        aboutm.textContent = data[attr].about;
        contactm.textContent = data[attr].contact;

				titlem.textContent = data[attr].title;
				
			});
    });

    


var data = {
   
        "English": 
        {
          "active" : "Home",
          "service": "Services",
          "news": "News",
          "ad" :"Adveretisement",
          "info":"Information",
          "about": "About",
          "contact" : "Contact" ,
          "title": "Welcome For All to JunuduRahman Center Ruqya",
        },
        "Arabic": 
        {
          "active" : "الصفحة الرئيسية",
          "service": "خدمات",
          "news": "أخبار",
          "ad" : "إعلانات",
          "info": "معلومات",
          "about": "من نحن",
          "contact" : "تواصل معنا" ,
          "title": "مرحبا بكم للجميع إلى مركز جنود الرحمن للرقية الشرعية",
        },
        "Somali": 
        {
          "active" : "Boga Weyn",
          "service": "Khadamaat",
          "news": "Akhbaar",
          "ad" :"Ogeysiis",
          "info":"Maclumaat",
          "about": "Khusuusiya",
          "contact" : "Xiriir" ,
          "title": "Kusodhawaada Xaruunta Cilajka JunuuduRahman Ruqya Sharciga Ah",
        }
      }
