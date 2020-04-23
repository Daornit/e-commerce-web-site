import Head from 'next/head';

//custom components
import Layout from '../components/partials/Layout';

export default function About() {
return (
<>
  <Layout>

    <Head>
      <meta charSet="UTF-8" />>
      <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>E-Commerce</title>
      {/*
      <!--Font awesome CDN--> */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
      {/*
      <!--Scroll reveal CDN--> */}
      <script src="/main.js"></script>
    </Head>
    <section className="about__banner-section" id="banner-section">
      <div className="container flex-display">
        <h1>Бидний тухай</h1>
        <div className="line-about"></div>

        <ul className="social-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-square"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-tripadvisor"></i></a>
        </ul>

        <img src="/images/about.jpeg" className="about__banner-background" alt="" />
      </div>
    </section>

    <section className="about">
      <div className="container flex-display">
        <img src="http://mn.mongoltamkhiso.mn/images/news/crop1/accf6f7122a5e8e11a1e1e6e48acdf49.jpg"
          className="coverImg" alt="" />
        <div className="content__about">
          <p>
            “МОНГОЛ ТАМХИ СО” ХХК нь 2001 онд байгуулагдсан бөгөөд Монголын улсын тамхины зах зээлийн томоохон
            үйлдвэрлэгч болон ханган нийлүүлэгч байгууллага юм. Байгуулагдсанаас хойш 10 жилийн дотор Монголын Улсын
            тамхины зах зээлийн 47%-ийг дангаар хангаж буй үндэсний шилдэг аж ахуйн нэгж болж чадсан тус компани
            одоогоор нийт 8000 м.кв орчим талбайтай байрандаа 150 гаруй ажилтан ажиллагсадтайгаар үйл ажиллагаа явуулж
            байна. 2010 онд ISO 9001 стандартын гэрчилгээг авч олон улсын түвшинд үйл ажиллагаагаа явуулах эрх бүхий
            байгууллага болсон бол 2012 онд ISO 22000 буюу Хүнсний Аюулгүй Байдлын Тогтолцоог үйлдвэрлэлдээ амжилттай
            нэвтрүүлэн ажиллаж байна.
          </p>
          <p>
            <strong>БИДНИЙ УРИА</strong>
          </p>
          <p>
            Cэтгэлээсээ хийж бүтээсэн бүхэнд сайн сайхан оршиж байдаг . Тийм ч учраас бид “ЧИН СЭТГЭЛ ЧАНАРЫГ
            БҮТЭЭДЭГ” гэсэн уриаг эрхэм болгодог.
          </p>
          <p>
            <strong>ЭРХЭМ ЗОРИЛГО</strong>
          </p>
          <p>
            Монгол Улсын эдийн засаг, нийгмийн хөгжилд тэргүүний хөрөнгө оруулагч байх, үйлдвэрлэлийн салбарт
            бүтээгдэхүүний чанар, ажилчдын ур чадвар, нийгмийн үр өгөөжөөрөө ямагт тэргүүлэгч байж, олон улсын жишигт
            нийцсэн бүтээгдэхүүн үйлдвэрлэн , хэрэглэгчдийн хүсэл сонирхолыг бүрэн хангасан үйл ажиллагаа явуулахад
            компаний эрхэм зорилго оршино.
          </p>
          <hr />
          <p>
            <span class="_mh6 _wsc"><span class="_3oh- _58nk" data-redactor-class="_3oh- _58nk"><strong
                  data-redactor-tag="strong">КОМПАНИЙ ҮҮСГЭН БАЙГУУЛАГЧ, ХУВЬЦАА ЭЗЭМШИГЧИЙН
                  НЭР<span></span></strong></span></span>
          </p>
          <ul>
            <li class="pb20"><strong>Монгол Улсын Ахмадын хүч хоршоо 233687 30%</strong><br />
              СХД 18-р хороо 1-р хороолол /Өнөр хороолол/ БЦ012-ын ангийн хашаанд
            </li>
            <li class="pb20"><strong>Монгол Улсын Нью континент ХХК 2864282 19%</strong><br />
              Монгол Улс, Улаанбаатар хот, Баянгол дүүрэг 4-р хороо Үйлдвэрийн баруун бүс, Баруун үйлдвэрчний гудамж
              6/2 тоот
            </li>
            <li class="pb20"><strong>БНХАУ-ын Шан Шигийн тамхины үйлдвэр 61000000001041 41%</strong><br />
              БНХАУ, Ши Ан хот, Гао шин дүүрэг, Фэн Хуй гудамж
            </li>
            <li class="pb20"><strong>БНХАУ-ын тамхины ерөнхий Шан Ши муж дахь компани 612129196304060012
                10%</strong><br />
              БНХАУ, Ши Ан хот, Чю Жяны шинэ дүүрэг, Ян Нанийн 4-р гудамж
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
  <style jsx>{` 
      .about__banner-section {
        width: 100%;
        height: 20rem;
        background-image: linear-gradient(to top, rgba(0, 0, 200, .5), transparent);
        display: flex;
        align-items: center;
        text-align: center;
        overflow-y: hidden;
        padding: 9rem 0 0 0;
      }

      .about__banner-background {
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 20rem;
        object-fit: cover;
        transform: scale(1);
        transition: transform .5s;
      }

      .about__banner-section h1 {
        position: relative;
        color: #fff;
        font-size: 3rem;
        font-weight: 100;
        padding: 1rem 0;
      }

      .line-about {
        background: white;
        height: 1px;
        width: 34rem;
      }

      .flex-display {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .social-icons {
        list-style: none;
        display: flex;
        justify-content: center;
      }

      .social-icons i {
        font-size: 2rem;
        color: #fff;
        padding: .8rem 2rem;
        transition: color .5s;
      }

      .social-icons i:hover,
      .social-icons i:focus {
        color: var(--secondary-font-color)
      }

      .content__about ul {
        padding: 0 0 0 4rem;
        font-size: 1.6rem;
        line-height: 1.5;
      }

      .content__about hr {
        color: gray;
        margin: 2rem 0;
      }

      @media screen and (min-width: 900px) {

        .coverImg {
          width: 70rem;
          margin-bottom: 2rem;
        }

        .content__about{
          width: 65rem;
        }

        .content__about p{
          font-size: 1.6rem;
          font-weight: 100;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .about__banner-section {
          height: 35rem;
        }

        .about__banner-background {
          height: 35rem;
        }

        .line-about {
          width: 60rem;
        }
      }
    `}</style>
</>
);
}