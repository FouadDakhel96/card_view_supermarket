// import React, { Component  } from 'react';
// import TinderCard from 'react-tinder-card'
// import './App.css'
// import { Button } from 'react-bootstrap';
// import Card from './card'
// var Barcode = require('react-barcode');
//
//
// let data_to_arrange =
// [
//   {
//     "sub_category": "تزيين مخبوزات",
//     "brand": "بيتي كروكر",
//     "last_scan_time": "2020-06-29",
//     "image": "/files/16000437906_result.jpg",
//     "name": "خليط كيك بيتي كروكر اصفر 500 جرام",
//     "type": "خليط كيك",
//     "main_category": "مستلزمات الطبخ",
//     "barcode": "016000437906",
//     "price": 11.500000
//   },
//   {
//     "sub_category": "حليب طويل الأجل",
//     "brand": "نادك",
//     "last_scan_time": "2020-07-10",
//     "image": "/pics/fa21d2709c65b430fba743622d93517f91e9514f-00.jpg",
//     "name": "حليب طويل الاجل نادك قليل الدسم 200 مل",
//     "type": "حليب طويل الاجل",
//     "main_category": "الحليب والأجبان",
//     "barcode": "6281057011001",
//     "price": 1.250000
//   },
//   {
//     "sub_category": "عصائر",
//     "brand": "سيزر",
//     "last_scan_time": "2020-07-10",
//     "image": "/pics/1798969b9d80bf1fad350a8eebaae7aaa65616b4-00.jpg",
//     "name": "نكتار سيزر مانجو 250 مل",
//     "type": "نكتار",
//     "main_category": "المشروبات والتسالي",
//     "barcode": "6281060043617",
//     "price": 3.300000
//   },
//   {
//     "sub_category": "العناية بالشعر",
//     "brand": "غارنييه",
//     "last_scan_time": "2020-06-29",
//     "image": "/pics/bc8fe5b6f0a18717ab256809050ba35ba5dcdf66-00.jpg",
//     "name": "صبغة شعر غارنييه اشقر غامق 6 110 مل",
//     "type": "صبغة شعر",
//     "main_category": "العناية الشخصية",
//     "barcode": "3061375781076",
//     "price": 15.333333
//   },
//   {
//     "sub_category": "عصائر",
//     "brand": "كي دي دي",
//     "last_scan_time": "2020-07-13",
//     "image": "/pics/dd52f30b04970744103b02ec340286879c193ebd-00.jpg",
//     "name": "عصير كي دي دي اناناس 1 لتر",
//     "type": "عصير ",
//     "main_category": "المشروبات والتسالي",
//     "barcode": "6271002203117",
//     "price": 8.000000
//   },
//   {
//     "sub_category": "شاي وأعشاب",
//     "brand": "احمد",
//     "last_scan_time": "2020-06-29",
//     "image": "/pics/c8ba13f3c0e5c87f513881d3591e70d6c6ee4c03-00.jpg",
//     "name": "شاي احمد انجليزي 100 حبة",
//     "type": "شاي",
//     "main_category": "المشروبات والتسالي",
//     "barcode": "054881017817",
//     "price": 17.000000
//   },
//   {
//     "sub_category": "علك و حلوى",
//     "brand": "بورقات",
//     "last_scan_time": "2020-06-29",
//     "image": "/pics/25c18f4c8490393bcd359406124689a34a6a79a3-00.jpg",
//     "name": "حلاوة بورقات غائر حلقات 175 جرام",
//     "type": "حلاوة",
//     "main_category": "المشروبات والتسالي",
//     "barcode": "6281100301905",
//     "price": 8.761905
//   },
//   {
//     "sub_category": "المعكرونة والشعيرية",
//     "brand": "قودي",
//     "last_scan_time": "2020-07-10",
//     "image": "/pics/3885b25acfc0d2c77ba481da860ba1cefe20ea17-00.jpg",
//     "name": "مكرونة قودي من سميد القمح 500 جرام",
//     "type": "مكرونة ",
//     "main_category": "مستلزمات الطبخ",
//     "barcode": "6281014400190",
//     "price": 4.500000
//   },
//   {
//     "sub_category": "وجبات مجمدة",
//     "brand": "هوت اند كرسبي",
//     "last_scan_time": "2020-07-10",
//     "image": "/pics/34b3c225a6d56e11b7287cc3d3ef38648cc27a9b-00.jpg",
//     "name": "بطاطس مقلية هوت اند كرسبي كريس كات 2500 جرام",
//     "type": "بطاطس مقلية ",
//     "main_category": "المجمدات",
//     "barcode": "8711571072458",
//     "price": 29.571429
//   },
//   {
//     "sub_category": "معطرات الجو",
//     "brand": "ايرويك",
//     "last_scan_time": "2020-06-29",
//     "image": "/pics/545b7d698601dfb6c5c377de585c49da654af0ff-00.jpg",
//     "name": "فريشماتيك ايرويك ورود منتصف الليل 250 مل مع 35% خصم",
//     "type": "فريشماتيك",
//     "main_category": "مستلزمات المنزل",
//     "barcode": "6295120034637",
//     "price": 49.285714
//   },
//   {
//     "sub_category": "عناية الأسنان",
//     "brand": "أورال بي",
//     "last_scan_time": "2020-06-29",
//     "image": "/pics/c892bc36319afd8d399708ae1a61f02fe8233e82-00.jpg",
//     "name": "معجون اسنان أورال بي برو إكسبرت تبييض بالنعناع 75 مل",
//     "type": "معجون اسنان",
//     "main_category": "العناية الشخصية",
//     "barcode": "4084500190818",
//     "price": 18.000000
//   },
//   {
//     "sub_category": "العناية بالوجه",
//     "brand": "يوكو",
//     "last_scan_time": "2020-06-29",
//     "image": "/files/8853976004877.jpg",
//     "name": "واقي شمس يوكو بعامل حماية 30 جرام",
//     "type": "واقي من الشمس",
//     "main_category": "العناية الشخصية",
//     "barcode": "8853976004877",
//     "price": 20.000000
//   },
//   {
//     "sub_category": "العناية بالشعر",
//     "brand": "برت بلاس",
//     "last_scan_time": "2020-06-29",
//     "image": "/pics/df851b95c6600839eedc1ef11a0a20ebeee8fbe5-00.jpg",
//     "name": "شامبو برت بلاس لتقوية الشعر 400 مل",
//     "type": "شامبو",
//     "main_category": "العناية الشخصية",
//     "barcode": "6281031260128",
//     "price": 13.000000
//   },
//   {
//     "sub_category": "قهوة",
//     "brand": "كيف الشيوخ",
//     "last_scan_time": "2020-07-10",
//     "image": "/pics/e05ab61fabe3aaaeba0411abb1fe08472cefe1b8-00.jpg",
//     "name": "قهوة عربية كيف الشيوخ 500 جرام",
//     "type": "قهوة عربية",
//     "main_category": "المشروبات والتسالي",
//     "barcode": "6287010010029",
//     "price": 24.095238
//   },
//   {
//     "sub_category": "صلصات وخل",
//     "brand": "بوك",
//     "last_scan_time": "2020-07-13",
//     "image": "/pics/f326f32e494087bd61ecea8cff9aee1989528c48-00.jpg",
//     "name": "صلصة بوك البشاميل خفيفة مع الجبنة 500 مل",
//     "type": "صلصة",
//     "main_category": "مستلزمات الطبخ",
//     "barcode": "5711953078460",
//     "price": 17.500000
//   },
//   {
//     "sub_category": "خضار",
//     "brand": "فرشلي",
//     "last_scan_time": "2020-07-10",
//     "image": "/pics/d8950c611a40a5862052af854b317efa3ea5b8f5-00.jpg",
//     "name": "ذرة فرشلي صغار 425 جرام",
//     "type": "ذرة معلبة",
//     "main_category": "الإفطار والمعلبات",
//     "barcode": "6281063632023",
//     "price": 6.500000
//   },
//   {
//     "sub_category": "العناية بالشعر",
//     "brand": "بانتين",
//     "last_scan_time": "2020-06-29",
//     "image": "/pics/cbe339a5d290063b3a34ac91cb79471ae8ebcb21-00.jpg",
//     "name": "شامبو بانتين تموجات متناسقة 200 مل",
//     "type": "شامبو",
//     "main_category": "العناية الشخصية",
//     "barcode": "5410076881956",
//     "price": 10.000000
//   },
//   {
//     "sub_category": "الزيوت والسمن",
//     "brand": "بيوتي",
//     "last_scan_time": null,
//     "image": "/pics/8d93ee79b0c0e0253587e5ca4ca9fa286a771424-00.jpg",
//     "name": "زيت زيتون بيوتي مزيج زيت مكرر وزيت بكر ممتاز 300 مل",
//     "type": "زيت زيتون",
//     "main_category": "مستلزمات الطبخ",
//     "barcode": "5285004915573",
//     "price": 9.500000
//   },
//   {
//     "sub_category": "الصابون والعناية بالجسم",
//     "brand": "لايف بوي",
//     "last_scan_time": null,
//     "image": "/pics/50b0eb04de8593e53fecbec8e63b3363108db9e3-00.jpg",
//     "name": "صابون سائل لليدين لايف بوي للحماية من الجراثيم 750 مل",
//     "type": "صابون سائل لليدين",
//     "main_category": "العناية الشخصية",
//     "barcode": "6281006550766",
//     "price": 40.000000
//   },
//   {
//     "sub_category": "غذاء الطفل",
//     "brand": "سيريلاك",
//     "last_scan_time": "2020-06-29",
//     "image": "/pics/a547fe89fb36698a587ad7ac3a3280fea5a40515-10.jpg",
//     "name": "طعام اطفال سيريلاك قمح وفواكه من 6 اشهر 400 جرام",
//     "type": "طعام أطفال",
//     "main_category": "احتياجات الأطفال",
//     "barcode": "7613034981745",
//     "price": 26.285714
//   },
//   {
//     "sub_category": "الصابون والعناية بالجسم",
//     "brand": "ديتول",
//     "last_scan_time": "2020-06-29",
//     "image": "/files/6001106112127r.jpg",
//     "name": "صابون ديتول كوول 120 جرام",
//     "type": "صابون",
//     "main_category": "العناية الشخصية",
//     "barcode": "6001106112127",
//     "price": 3.500000
//   },
//   {
//     "sub_category": "عسل ومربى",
//     "brand": "البريزال",
//     "last_scan_time": null,
//     "image": "/pics/5e60f2c9e591dbc8774be94061f06beda46fe0f0-00.jpg",
//     "name": "عسل البريزال الغابة السوداء 500 جرام",
//     "type": "عسل",
//     "main_category": "الإفطار والمعلبات",
//     "barcode": "8413812071526",
//     "price": 38.250000
//   }
// ]
// let correct_prices = []
// let wrong_prices = []
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lastDirection:null,
//
//     }
//   }
//
//   swiped = (direction, nameToDelete,barcode) => {
//       // console.log('removing: ' + nameToDelete)
//       // console.log('direction: ' + direction)
//       this.setState({
//         lastDirection:direction
//       })
//
//       if (direction === 'right') {
//         this.addToCorrectPrices(barcode)
//       }
//       else if(direction === 'left') {
//         this.addToWrongPrices(barcode)
//       }
//
//   }
//   addToCorrectPrices = (item) =>{
//     correct_prices.push(item)
//     console.log('correct prices are: ',correct_prices);
//   }
//
//   addToWrongPrices = (item) =>{
//     wrong_prices.push(item)
//     console.log('wrong prices are: ',wrong_prices);
//   }
//
//   outOfFrame = (name) => {
//       // console.log(name + ' left the screen!')
//   }
//   render() {
//     return (
//         // <div className='cardContainer' style={{justifyContent: 'center',alignItems: 'center',display: 'flex',paddingTop: 0}}>
//         //   {
//         //     data_to_arrange.map((item)=>
//         //
//         //       <TinderCard className='swipe' key={item.name} onSwipe={(dir) => this.swiped(dir, item.name,item.barcode) } onCardLeftScreen={() => this.outOfFrame(item.name)}>
//         //         <div className='card' style={{padding: 10}}>
//         //
//         //           <div style={{maxWidth: 375,overflow: 'hidden'}}>
//         //             <img
//         //               src={'https://nana.sa/'+item.image}
//         //               alt="صورة المنتج"
//         //               style={{maxHeight: 250,maxWidth: '100%'}}
//         //             />
//         //           </div>
//         //
//         //           <h5 style={{color: 'black'}}>{item.name}</h5>
//         //           <div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',paddingBottom: 0,marginBottom: 0}}>
//         //             <h2 style={{color: 'red'}}>{item.price.toFixed(2)} </h2>
//         //           <h5 style={{color: 'red',marginLeft: 5}}> SAR </h5>
//         //           </div>
//         //
//         //           {/* <h4 style={{color:'red'}}>هل السعر صحيح؟</h4> */}
//         //           <Button variant="success" block style={{height: 30,padding: 0,marginBottom: 5}}>اعتماد</Button>
//         //
//         //           <div style={{display: 'flex',flexDirection: 'row',width: '100%',justifyContent: 'space-between',alignItems: 'center',height: 30}}>
//         //             <Button onClick={() =>console.log(TinderCard)} variant="secondary" style={{width: '49%',height: 30,padding: 0}}>لاحقاً</Button>
//         //           <Button variant="danger" style={{width: '49%',height: 30,padding: 0}}>تغيير السعر</Button>
//         //           </div>
//         //           <Barcode style={{marginTop: 0,maxWidth:'100%'}}value={item.barcode} format={item.barcode.length===13 ? "EAN13" : item.barcode.length===8 ? "EAN8" : "UPC"} width={1.5}  height={40}/>
//         //
//         //         </div>
//         //       </TinderCard>
//         //   )}
//         // </div>
//         <div className="container" style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
//           <Card />
//         </div>
//     );
//   }
//
// }
//
// export default App;

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import { Button } from 'react-bootstrap';
var Barcode = require('react-barcode');



const data_to_arrange =
[
  {
    "sub_category": "تزيين مخبوزات",
    "brand": "بيتي كروكر",
    "last_scan_time": "2020-06-29",
    "image": "/files/16000437906_result.jpg",
    "name": "خليط كيك بيتي كروكر اصفر 500 جرام",
    "type": "خليط كيك",
    "main_category": "مستلزمات الطبخ",
    "barcode": "016000437906",
    "price": 11.500000
  },
  {
    "sub_category": "حليب طويل الأجل",
    "brand": "نادك",
    "last_scan_time": "2020-07-10",
    "image": "/pics/fa21d2709c65b430fba743622d93517f91e9514f-00.jpg",
    "name": "حليب طويل الاجل نادك قليل الدسم 200 مل",
    "type": "حليب طويل الاجل",
    "main_category": "الحليب والأجبان",
    "barcode": "6281057011001",
    "price": 1.250000
  },
  {
    "sub_category": "عصائر",
    "brand": "سيزر",
    "last_scan_time": "2020-07-10",
    "image": "/pics/1798969b9d80bf1fad350a8eebaae7aaa65616b4-00.jpg",
    "name": "نكتار سيزر مانجو 250 مل",
    "type": "نكتار",
    "main_category": "المشروبات والتسالي",
    "barcode": "6281060043617",
    "price": 3.300000
  },
  {
    "sub_category": "العناية بالشعر",
    "brand": "غارنييه",
    "last_scan_time": "2020-06-29",
    "image": "/pics/bc8fe5b6f0a18717ab256809050ba35ba5dcdf66-00.jpg",
    "name": "صبغة شعر غارنييه اشقر غامق 6 110 مل",
    "type": "صبغة شعر",
    "main_category": "العناية الشخصية",
    "barcode": "3061375781076",
    "price": 15.333333
  },
  {
    "sub_category": "عصائر",
    "brand": "كي دي دي",
    "last_scan_time": "2020-07-13",
    "image": "/pics/dd52f30b04970744103b02ec340286879c193ebd-00.jpg",
    "name": "عصير كي دي دي اناناس 1 لتر",
    "type": "عصير ",
    "main_category": "المشروبات والتسالي",
    "barcode": "6271002203117",
    "price": 8.000000
  },
  {
    "sub_category": "شاي وأعشاب",
    "brand": "احمد",
    "last_scan_time": "2020-06-29",
    "image": "/pics/c8ba13f3c0e5c87f513881d3591e70d6c6ee4c03-00.jpg",
    "name": "شاي احمد انجليزي 100 حبة",
    "type": "شاي",
    "main_category": "المشروبات والتسالي",
    "barcode": "054881017817",
    "price": 17.000000
  },
  {
    "sub_category": "علك و حلوى",
    "brand": "بورقات",
    "last_scan_time": "2020-06-29",
    "image": "/pics/25c18f4c8490393bcd359406124689a34a6a79a3-00.jpg",
    "name": "حلاوة بورقات غائر حلقات 175 جرام",
    "type": "حلاوة",
    "main_category": "المشروبات والتسالي",
    "barcode": "6281100301905",
    "price": 8.761905
  },
  {
    "sub_category": "المعكرونة والشعيرية",
    "brand": "قودي",
    "last_scan_time": "2020-07-10",
    "image": "/pics/3885b25acfc0d2c77ba481da860ba1cefe20ea17-00.jpg",
    "name": "مكرونة قودي من سميد القمح 500 جرام",
    "type": "مكرونة ",
    "main_category": "مستلزمات الطبخ",
    "barcode": "6281014400190",
    "price": 4.500000
  },
  {
    "sub_category": "وجبات مجمدة",
    "brand": "هوت اند كرسبي",
    "last_scan_time": "2020-07-10",
    "image": "/pics/34b3c225a6d56e11b7287cc3d3ef38648cc27a9b-00.jpg",
    "name": "بطاطس مقلية هوت اند كرسبي كريس كات 2500 جرام",
    "type": "بطاطس مقلية ",
    "main_category": "المجمدات",
    "barcode": "8711571072458",
    "price": 29.571429
  },
  {
    "sub_category": "معطرات الجو",
    "brand": "ايرويك",
    "last_scan_time": "2020-06-29",
    "image": "/pics/545b7d698601dfb6c5c377de585c49da654af0ff-00.jpg",
    "name": "فريشماتيك ايرويك ورود منتصف الليل 250 مل مع 35% خصم",
    "type": "فريشماتيك",
    "main_category": "مستلزمات المنزل",
    "barcode": "6295120034637",
    "price": 49.285714
  },
  {
    "sub_category": "عناية الأسنان",
    "brand": "أورال بي",
    "last_scan_time": "2020-06-29",
    "image": "/pics/c892bc36319afd8d399708ae1a61f02fe8233e82-00.jpg",
    "name": "معجون اسنان أورال بي برو إكسبرت تبييض بالنعناع 75 مل",
    "type": "معجون اسنان",
    "main_category": "العناية الشخصية",
    "barcode": "4084500190818",
    "price": 18.000000
  },
  {
    "sub_category": "العناية بالوجه",
    "brand": "يوكو",
    "last_scan_time": "2020-06-29",
    "image": "/files/8853976004877.jpg",
    "name": "واقي شمس يوكو بعامل حماية 30 جرام",
    "type": "واقي من الشمس",
    "main_category": "العناية الشخصية",
    "barcode": "8853976004877",
    "price": 20.000000
  },
  {
    "sub_category": "العناية بالشعر",
    "brand": "برت بلاس",
    "last_scan_time": "2020-06-29",
    "image": "/pics/df851b95c6600839eedc1ef11a0a20ebeee8fbe5-00.jpg",
    "name": "شامبو برت بلاس لتقوية الشعر 400 مل",
    "type": "شامبو",
    "main_category": "العناية الشخصية",
    "barcode": "6281031260128",
    "price": 13.000000
  },
  {
    "sub_category": "قهوة",
    "brand": "كيف الشيوخ",
    "last_scan_time": "2020-07-10",
    "image": "/pics/e05ab61fabe3aaaeba0411abb1fe08472cefe1b8-00.jpg",
    "name": "قهوة عربية كيف الشيوخ 500 جرام",
    "type": "قهوة عربية",
    "main_category": "المشروبات والتسالي",
    "barcode": "6287010010029",
    "price": 24.095238
  },
  {
    "sub_category": "صلصات وخل",
    "brand": "بوك",
    "last_scan_time": "2020-07-13",
    "image": "/pics/f326f32e494087bd61ecea8cff9aee1989528c48-00.jpg",
    "name": "صلصة بوك البشاميل خفيفة مع الجبنة 500 مل",
    "type": "صلصة",
    "main_category": "مستلزمات الطبخ",
    "barcode": "5711953078460",
    "price": 17.500000
  },
  {
    "sub_category": "خضار",
    "brand": "فرشلي",
    "last_scan_time": "2020-07-10",
    "image": "/pics/d8950c611a40a5862052af854b317efa3ea5b8f5-00.jpg",
    "name": "ذرة فرشلي صغار 425 جرام",
    "type": "ذرة معلبة",
    "main_category": "الإفطار والمعلبات",
    "barcode": "6281063632023",
    "price": 6.500000
  },
  {
    "sub_category": "العناية بالشعر",
    "brand": "بانتين",
    "last_scan_time": "2020-06-29",
    "image": "/pics/cbe339a5d290063b3a34ac91cb79471ae8ebcb21-00.jpg",
    "name": "شامبو بانتين تموجات متناسقة 200 مل",
    "type": "شامبو",
    "main_category": "العناية الشخصية",
    "barcode": "5410076881956",
    "price": 10.000000
  },
  {
    "sub_category": "الزيوت والسمن",
    "brand": "بيوتي",
    "last_scan_time": null,
    "image": "/pics/8d93ee79b0c0e0253587e5ca4ca9fa286a771424-00.jpg",
    "name": "زيت زيتون بيوتي مزيج زيت مكرر وزيت بكر ممتاز 300 مل",
    "type": "زيت زيتون",
    "main_category": "مستلزمات الطبخ",
    "barcode": "5285004915573",
    "price": 9.500000
  },
  {
    "sub_category": "الصابون والعناية بالجسم",
    "brand": "لايف بوي",
    "last_scan_time": null,
    "image": "/pics/50b0eb04de8593e53fecbec8e63b3363108db9e3-00.jpg",
    "name": "صابون سائل لليدين لايف بوي للحماية من الجراثيم 750 مل",
    "type": "صابون سائل لليدين",
    "main_category": "العناية الشخصية",
    "barcode": "6281006550766",
    "price": 40.000000
  },
  {
    "sub_category": "غذاء الطفل",
    "brand": "سيريلاك",
    "last_scan_time": "2020-06-29",
    "image": "/pics/a547fe89fb36698a587ad7ac3a3280fea5a40515-10.jpg",
    "name": "طعام اطفال سيريلاك قمح وفواكه من 6 اشهر 400 جرام",
    "type": "طعام أطفال",
    "main_category": "احتياجات الأطفال",
    "barcode": "7613034981745",
    "price": 26.285714
  },
  {
    "sub_category": "الصابون والعناية بالجسم",
    "brand": "ديتول",
    "last_scan_time": "2020-06-29",
    "image": "/files/6001106112127r.jpg",
    "name": "صابون ديتول كوول 120 جرام",
    "type": "صابون",
    "main_category": "العناية الشخصية",
    "barcode": "6001106112127",
    "price": 3.500000
  },
  {
    "sub_category": "عسل ومربى",
    "brand": "البريزال",
    "last_scan_time": null,
    "image": "/pics/5e60f2c9e591dbc8774be94061f06beda46fe0f0-00.jpg",
    "name": "عسل البريزال الغابة السوداء 500 جرام",
    "type": "عسل",
    "main_category": "الإفطار والمعلبات",
    "barcode": "8413812071526",
    "price": 38.250000
  }
]
let correct_prices = []
let wrong_prices = []
let ignore_prices =[]


const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 400,
    width:'100%',
    // flexGrow: 1,
    // height:'100%'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom:5,
    paddingRight:10,
    paddingLeft:10,
    // paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  header2: {
    marginBottom:5,
    paddingRight:10,
    paddingLeft:10,
    // paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    maxHeight: '100%',
    maxWidth: 400,
    overflow: 'hidden',
    // display: 'block',
    // width: '100%',
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data_to_arrange.length;

  const handleNext = () => {
    if (data_to_arrange.length > (activeStep + 1)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }else {
      console.log('You have reached the maximum');
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const addToCorrectPrices = (item) =>{
    let check = 0
    for (var i = 0; i < correct_prices.length; i++) {
      if (correct_prices[i].barcode == item.barcode){
        check =1
      }
    }
    if (check == 0) {
      correct_prices.push(item)
    }
    console.log('correct prices are: ',correct_prices);
    handleNext()
  }

  const addToWrongPrices = (item) =>{
    let check = 0
    for (var i = 0; i < wrong_prices.length; i++) {
      if (wrong_prices[i].barcode == item.barcode){
        check =1
      }
    }
    if (check == 0) {
      wrong_prices.push(item)
    }
    console.log('wrong prices are: ',wrong_prices);
    handleNext()
  }

  const addToIgnoreNowPrices = (item) =>{
    let check = 0
    for (var i = 0; i < ignore_prices.length; i++) {
      if (ignore_prices[i].barcode == item.barcode){
        check =1
      }
    }
    if (check == 0) {
      ignore_prices.push(item)
    }
    console.log('Ignore prices are: ',ignore_prices);
    handleNext()
  }

  return (
    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>

      <div className={classes.root} style={{height: window.innerHeight,display: 'flex',flexDirection: 'column',justifyContent: 'space-between'}}>

        <Paper square elevation={2} className={classes.header} style={{height: '10%',maxHeight: '10%'}}>
          <h5 style={{textAlign:'center'}}>{data_to_arrange[activeStep].name}</h5>
        </Paper>

        <div style={{display: 'flex',width: '100%',justifyContent: 'center',alignItems: 'center',height: '30%',maxHeight: '30%'}}>
          <img
            className={classes.img}
            src={'https://nana.sa/'+data_to_arrange[activeStep].image}
            alt={data_to_arrange[activeStep].label}
          />
        </div>

        <Paper square elevation={0} className={classes.header} style={{height: '10%',maxHeight: '10%'}}>
          <div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',paddingBottom: 0,marginBottom: 0}}>
            <h2 style={{color: 'red'}}>{data_to_arrange[activeStep].price.toFixed(2)} </h2>
            <h5 style={{color: 'red',marginLeft: 5}}> SAR </h5>
          </div>
        </Paper>

        <Paper square elevation={0} className={classes.header2} style={{height: '30%',maxHeight: '30%',paddingTop: 10,paddingBottom: 10}}>
          <Button variant="contained" color="primary" onClick={() => addToCorrectPrices(data_to_arrange[activeStep])} style={{width: '100%',height: 40,padding: 0,marginBottom: 10}}>اعتماد</Button>
          <div style={{display: 'flex',flexDirection: 'row',width: '100%',justifyContent: 'space-between',alignItems: 'center',height: 40,marginBottom: 10}}>
            <Button variant="contained" color="default" onClick={() => addToIgnoreNowPrices(data_to_arrange[activeStep])} style={{width: '49%',height: 40,padding: 0}}>لاحقاً</Button>
            <Button variant="contained" color="secondary" onClick={() => addToWrongPrices(data_to_arrange[activeStep])} style={{width: '49%',height: 40,padding: 0}}>تغيير السعر</Button>
          </div>
          <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',width: '100%'}}>
            <Barcode style={{marginTop: 5,maxWidth:'100%'}}value={data_to_arrange[activeStep].barcode} format={data_to_arrange[activeStep].barcode.length===13 ? "EAN13" : data_to_arrange[activeStep].barcode.length===8 ? "EAN8" : "UPC"} width={1.5}  height={60}/>
          </div>
        </Paper>

        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
               {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    </div>

  );
}
