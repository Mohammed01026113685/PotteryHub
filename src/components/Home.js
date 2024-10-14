// Home.js
import React, { useEffect, useRef } from 'react';
import WelcomeMessage from './WelcomeMessage';
import ProductsSection from './sections/ProductsSection';
import SustainabilitySection from './sections/SustainabilitySection';
import InnovationSection from './sections/InnovationSection';
import SuccessStoriesSection from './sections/SuccessStoriesSection';
import ChallengesSection from './sections/ChallengesSection';
import ServicesSection from './ServicesSection';
import { ToastContainer } from 'react-toastify';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/css/Home.css';
import '../components/css/ProductCard.css';

import img1 from './images/home/1.png';
import img2 from './images/home/2.png';
import img3 from './images/home/3.png';
import img4 from './images/home/tanmea mostdama.webp';
import img5 from './images/home/33.png';
import img6 from './images/home/22.png';
import img7 from './images/home/54.jpeg';

const Home = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    sectionRefs.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const products = [
    { id: 1, name: 'فخار تقليدي', price: '100 EGP', description: 'فخار يدوي تقليدي بجودة عالية.', image: img1 },
    { id: 2, name: 'صحن زخرفي', price: '150 EGP', description: 'صحن مصنوع يدوياً بتصميم زخرفي فريد.', image: img2 },
    { id: 3, name: 'مزهرية حديثة', price: '120 EGP', description: 'مزهرية حديثة مصممة لتناسب أي ديكور.', image: img3 },
    { id: 4, name: 'فنجان قهوة', price: '80 EGP', description: 'فنجان قهوة يدوي بطابع فخاري مميز.', image: img5 },
    { id: 5, name: 'طقم حلل فخاري', price: '90 EGP', description: '٢٢ قطعة متنوعة ومختلفة من الفخار.', image: img6 },
    { id: 6, name: 'طبق فخاري', price: '110 EGP', description: 'طبق فخاري مصنوع يدوياً مع لمسات تقليدية.', image: img7 },
  ];

  const showUnderConstructionMessage = () => {
    toast.info('🚧 نحن نعمل على تطوير الموقع! قريباً سيكون جاهزاً لتجربتك المميزة. شكرًا لصبرك! 🙏', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Slide,
    });
  };

  return (
    <div className="bg">
      <div className="home-container">
        <h1 className="title">مرحبًا بكم في منصتكم الرقمية</h1>
        <div className="welcome-message">
          <h1>منصة لدعم وتمكين الحرفيين في صناعة الفخار بصعيد مصر</h1>
          <WelcomeMessage />
        </div>
        <section className="home-section-u">
          <h2>ماذا نقدم؟</h2>
          <div className="content-container">
            <ul className="content-li">
              <li>منصة شاملة: نحن نقدم منصة رقمية متكاملة تجمع بين الحرفيين، المستهلكين، والمستثمرين</li>
              <li>ورش عمل ودورات تدريبية: نقدم ورش عمل ودورات تدريبية تهدف إلى تطوير المهارات الفنية والإدارية للحرفيين</li>
              <li>منصة تجارة إلكترونية: سيتم إنشاء متجر إلكتروني متكامل يتيح للحرفيين بيع منتجاتهم الفخارية</li>
              <li>تعاون مع مؤسسات سياحية: بالتعاون مع المؤسسات السياحية في الأقصر وأسوان</li>
            </ul>
            <div className="image-container">
              <img src={img4} alt="tanmea mostdama" className='image4'/>
            </div>
          </div>
        </section>

        <ServicesSection />

        <ProductsSection
          products={products}
          sectionRef={el => sectionRefs.current[0] = el}
          onProductClick={showUnderConstructionMessage}
        />

        <SustainabilitySection sectionRef={el => sectionRefs.current[2] = el} />
        <InnovationSection sectionRef={el => sectionRefs.current[3] = el} />
        <SuccessStoriesSection sectionRef={el => sectionRefs.current[4] = el} />
        <ChallengesSection sectionRef={el => sectionRefs.current[5] = el} />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Home;
