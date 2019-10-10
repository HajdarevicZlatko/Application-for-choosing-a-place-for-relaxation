import { HomeComponent } from './home/home.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentriService {
  
 
  centriZaRelaksaciju = [	
    {
      ime:"Bazen",
      lokacija:"Kosutnjak",
      popust:20,
      slika:"https://www.infoera.rs/wp-content/uploads/2018/07/Bazen-Pozega-1-640x400.jpg",
      cena:400
    },
    {
      ime:"Bazen",
      lokacija:"Bazen Tamajdan",
      popust:20,
      slika:"https://www.besplatansport.com/media/com_mtree/images/listings/m/1482.jpg",
      cena:300
    },
    {
      ime:"Bazen",
      lokacija:"Bazeni Banjica",
      popust:20,
      slika:"http://waterpolopartizan.rs/wp-content/uploads/2015/12/h-je-850cm.jpg",
      cena:300
    },
    {
      ime:"Bazen",
      lokacija:"SC Novi Beograd, SRC 11 April",
      popust:10,
      slika:"https://ocdn.eu/pulscms-transforms/1/aCAk9lMaHR0cDovL29jZG4uZXUvaW1hZ2VzL3B1bHNjbXMvWm1VN01EQV8vN2MwZmEzOWY4ZTIxNWIxNmVmNTVlMTE3MzY5MWFiZDMuanBlZ5GTAs0C5ACBAAE",
      cena:500
    },
    {
      ime:"Bazen",
      lokacija:"Kengur Resort",
      popust:20,
      slika:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/29/02/2902376_v2.jpeg",
      cena:400
    },
    {
      ime:"Teren",
      lokacija:"Tasmajdan",
      popust:15,
      cena:2000,
      slika:"https://www.balonizafudbal.com/wp-content/uploads/2013/10/Balon_za_fudbal_Top_Spin-1-e1554970304734.jpg"
    },
    {
      ime:"Teren",
      lokacija:"Rajko Mitic",
      cena:1500,
      popust:10,
      slika:"https://www.bizlife.rs/wp-content/uploads/2018/08/StadionRajkoMiticFKCZ.jpg"
    },
    {
      ime:"Teren",
      lokacija:"JNA",
      cena:1500,
      popust:20,
      slika:"http://www.tiketklub.com/wp-content/uploads/2012/09/7591.jpg"
    },
    {
      ime:"Teren",
      lokacija:"Balon za fudbal Brazil",
      cena:1200,
      popust:20,
      slika:"https://www.011info.com/uploads/Firma/2014/12/17/36880/5.jpg"
    },
    {
      ime:"Teren",
      lokacija:"Balon za fudbal Bubamara",
      cena:1200,
      popust:20,
      slika:"https://www.balonizafudbal.com/wp-content/uploads/2016/01/13el-clasico.png"
    },
    
    {
      ime:"Bazen",
      lokacija:"Olimp",
      popust:50,
      cena:350,
      slika:"https://www.besplatansport.com/media/com_mtree/images/listings/m/4105.jpg"
    },
    {
      ime:"Bioskop",
      lokacija:"TuckWood",
      popust:20,
      cena:700,
      slika:"https://www.android.rs/lopare/res/slike/2174.jpg"
    },
    {
      ime:"Bioskop",
      lokacija:"Usce",
      popust:40,
      cena:1000,
      slika:"https://www.cineplexx.rs/GenticsImageStore/628/353/force//media/rs/novosti/vesti/clanci/BeFunky_Puna_sala_bioskopa_Cineplexx.jpg"
    },
    {
      ime:"Bioskop",
      lokacija:"Delta city",
      popust:40,
      cena:1000,
      slika:"https://s3.eu-central-1.amazonaws.com/apartmani-u-beogradu/uploads/firms/357/sr/main/cineplexx-delta-city-bioskopi-beograd-novi-beograd.jpg"
    },
    {
      ime:"Bioskop",
      lokacija:"Cinema",
      popust:60,
      cena:1000,
      slika:"https://www.studentskizivot.com/wp-content/uploads/2014/07/CINEMA.jpg"
    },
    {
      ime:"Bioskop",
      lokacija:"Fontana",
      popust:40,
      cena:800,
      slika:"http://www.novosti.rs/upload/images/2015//01/23/bioskop-fontana%20.jpg"
    },
    {
      ime:"Bioskop",
      lokacija:"New Theatre Zvezda",
      popust:20,
      cena:1000,
      slika:"https://i0.wp.com/belgradespots.com/wp-content/uploads/job-manager-uploads/main_image/2018/03/bioskop-zvezda-okupacija.jpg?fit=550%2C413"
    },
    {
      ime:"Lokal",
      lokacija:"Jazz Cafe",
      popust:20,
      cena:800,
      slika:"https://www.novagodina.rs/images/5329.jpg"
    },
    {
      ime:"Lokal",
      lokacija:"Blaznavac",
      popust:20,
      cena:800,
      slika:"https://www.u-beogradu.com/uploads/2014/10/blaznavac-kafe-bar-720x420.jpg"
    },
    {
      ime:"Lokal",
      lokacija:"Demode",
      popust:20,
      cena:600,
      slika:"https://scontent-yyz1-1.cdninstagram.com/vp/e7d137c30d18a781499f1955ba6509d4/5D92FFC4/t51.2885-15/sh0.08/e35/s750x750/32831619_609754499387132_971087273787392000_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&ig_cache_key=MTc4NzIwNjYwODMxMDU5NjkwNQ%3D%3D.2"
    },
    {
      ime:"Lokal",
      lokacija:"Kafeterija",
      popust:30,
      cena:800,
      slika:"https://media-cdn.tripadvisor.com/media/photo-s/17/45/dc/60/first-floor-of-kafeterija.jpg"
    },
    {
      ime:"Lokal",
      lokacija:"Ceger Kafe",
      popust:20,
      cena:900,
      slika:"https://media-cdn.tripadvisor.com/media/photo-s/07/e8/9d/1a/ceger-kafe.jpg"
    }
  
    ];
     centriZeljeni;
  constructor() {
    this.centriZeljeni=this.centriZaRelaksaciju;
   }
   changeCentriZeljeniToAnAdequateParamater(ime1:String){
     if(ime1==""){
       return this.centriZaRelaksaciju;
     }
     this.centriZeljeni=this.centriZaRelaksaciju.filter(function(centar){
        return centar.ime==ime1;
     })
   }

   
}
