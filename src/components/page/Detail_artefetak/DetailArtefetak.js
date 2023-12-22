import React, { useState, useEffect } from "react";
import Icon from "../../assets/icon.png";

import './DetailArtefetak.css';

import Image1 from "../../assets/image1.png";
import JenisImg1 from "../../assets/1111.jpg";
import JenisImg2 from "../../assets/1113.jpg";
import JenisImg3 from "../../assets/1114.jpg";
import JenisImg4 from "../../assets/11115.jpg";


import ArrowSlide1 from "../../assets/slideleft.png";
import ArrowSlide2 from "../../assets/slideright.png";
import Navbar from "../widget/navbar/navbar";
const Detail_Artefetak = () => {
    const [manusiaPurbaIndex, setManusiaPurbaIndex] = useState(0);
    const [jenisManusiaPurbaIndex, setJenisManusiaPurbaIndex] = useState(0);

    const plusSlidesManusiaPurba = (n) => {
        const newIndex = manusiaPurbaIndex + n;
        const slides = document.querySelectorAll('.Manusia_Purba');
        if (newIndex >= 0 && newIndex < slides.length) {
            slides[manusiaPurbaIndex].classList.remove('active');
            setManusiaPurbaIndex(newIndex);
        }
    };

    const plusSlidesJenisManusiaPurba = (p) => {
        const PnewIndex = jenisManusiaPurbaIndex + p;
        const Pslides = document.querySelectorAll('.Jenis_Manusia_Purba');
        if (PnewIndex >= 0 && PnewIndex < Pslides.length) {
            Pslides[jenisManusiaPurbaIndex].classList.remove('Pactive');
            setJenisManusiaPurbaIndex(PnewIndex);
        }
    };
    return (
        <div className="all">

            <div className='tentang_manusia'>
                <div className='header'>
                    <img src={Icon} width={308} height={94} alt="" class='center'></img>
                </div>
                <div className="bg_detail" id="tentang">
                    <div className='test'>
                        <div className='detail_manusia'>
                            <div className="detail_image">
                                <img src={Image1} width='80%' height='80%'></img>
                            </div>
                            <div className='detail_manusia_purba'>
                                <h1 class='h1'>Tentang</h1>
                                <p class='p1'>Artefak adalah objek buatan manusia yang memiliki nilai sejarah, arkeologis, atau budaya. Artefak mencakup berbagai benda seperti alat, seni, perhiasan, dan benda-benda lain yang mencerminkan kehidupan dan kebudayaan manusia di masa lalu. Artefak seringkali ditemukan dalam situs arkeologi dan menjadi sumber informasi berharga bagi ahli sejarah dan arkeolog dalam memahami peradaban masa lampau.</p>
                                <p class='p2'>Contoh artefak meliputi perkakas batu dari zaman prasejarah, arca kuno, senjata tradisional, dan benda-benda lain yang memiliki nilai sejarah atau budaya. Mereka memberikan wawasan tentang kehidupan sehari-hari, keahlian teknologi, kepercayaan agama, dan aspek-aspek lain dari kehidupan manusia di masa lalu.</p>
                                {/* <img src={Tentang_manusia} alt=""></img> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="bg_evolusi">
                    <div className='Evolusi_manusia'>
                        <h1 class='h2'>Evolusi</h1>
                        <div className='Manusia_Purba' style={{ display: manusiaPurbaIndex === 0 ? 'block' : 'none' }}>
                            <div className="D1">
                                <div className="arrow">
                                    <a className="prev" onClick={() => plusSlidesManusiaPurba(-1)}>❮</a>
                                </div>
                                <div className='detail_evolusi_manusia'>
                                    <h1 class='h5'>Australopithecus</h1>
                                    <p class='p5'>Muncul sekitar 4 hingga 2 juta tahun yang lalu. Pada tahap ini, manusia purba pertama kali menunjukkan ciri khas berjalan tegak, suatu kemampuan yang membedakan mereka dari spesies lain. Evolusi pada periode ini ditandai dengan adaptasi terhadap lingkungan, membentuk landasan bagi perubahan selanjutnya.</p>
                                </div>
                                <div className='evolusi_image'>
                                    <img src={Image3}></img>
                                </div>
                                <div className="arrow">
                                    <a className="next" onClick={() => plusSlidesManusiaPurba(1)}>❯</a>
                                </div>
                            </div>
                            <div className="Slider"><img src={Slider1}></img></div>
                        </div>
                        <div className='Manusia_Purba' style={{ display: manusiaPurbaIndex === 1 ? 'block' : 'none' }}>
                            <div className="D1">
                                <div className="arrow">
                                    <a className="prev" onClick={() => plusSlidesManusiaPurba(-1)}>❮</a>
                                </div>
                                <div className='detail_evolusi_manusia'>
                                    <h1 class='h5'>Homo habilis</h1>
                                    <p class='p5'>Fase selanjutnya dari Australopithecus, Sekitar 2,4 hingga 1,5 juta tahun yang lalu. Homo habilis menonjolkan diri dengan kemampuan menggunakan perkakas batu, menunjukkan tanda-tanda pertama kecerdasan manusia purba. Periode ini mencerminkan adaptasi yang semakin efisien terhadap sumber daya alam dan kehidupan sehari-hari.</p>
                                </div>
                                <div className='evolusi_image'>
                                    <img src={Image3}></img>
                                </div>
                                <div className="arrow">
                                    <a className="next" onClick={() => plusSlidesManusiaPurba(1)}>❯</a>
                                </div>
                            </div>
                            <div className="Slider"><img src={Slider2}></img></div>
                        </div>
                        <div className='Manusia_Purba' style={{ display: manusiaPurbaIndex === 2 ? 'block' : 'none' }}>
                            <div className="D1">
                                <div className="arrow">
                                    <a className="prev" onClick={() => plusSlidesManusiaPurba(-1)}>❮</a>
                                </div>
                                <div className='detail_evolusi_manusia'>
                                    <h1 class='h5'>Homo erectus</h1>
                                    <p class='p5'>Muncul sekitar 1,9 juta tahun lalu hingga 143 ribu tahun yang lalu. Peningkatan kemampuan berjalan, berlari, dan penggunaan api adalah ciri khas Homo erectus. Ini adalah fase evolusi di mana manusia purba menyesuaikan diri secara lebih efektif terhadap berbagai lingkungan</p>
                                </div>
                                <div className='evolusi_image'>
                                    <img src={Image3} s></img>
                                </div>
                                <div className="arrow">
                                    <a className="next" onClick={() => plusSlidesManusiaPurba(1)}>❯</a>
                                </div>
                            </div>
                            <div className="Slider"><img src={Slider3}></img></div>
                        </div>
                        <div className='Manusia_Purba' style={{ display: manusiaPurbaIndex === 3 ? 'block' : 'none' }}>
                            <div className="D1">
                                <div className="arrow">
                                    <a className="prev" onClick={() => plusSlidesManusiaPurba(-1)}>❮</a>
                                </div>
                                <div className='detail_evolusi_manusia'>
                                    <h1 class='h5'>Homo sapiens neanderthalensis</h1>
                                    <p class='p5'>Yang berkisar antara 400 hingga 40 ribu tahun yang lalu, manusia purba menetap di Eropa dan Asia Barat. Adaptasi terhadap iklim yang keras dan penggunaan alat yang semakin kompleks menjadi sorotan dalam evolusi pada masa ini.</p>
                                </div>
                                <div className='evolusi_image'>
                                    <img src={Image3} s></img>
                                </div>
                                <div className="arrow">
                                    <a className="next" onClick={() => plusSlidesManusiaPurba(1)}>❯</a>
                                </div>
                            </div>
                            <div className="Slider"><img src={Slider4}></img></div>
                        </div>
                        <div className='Manusia_Purba' style={{ display: manusiaPurbaIndex === 4 ? 'block' : 'none' }}>
                            <div className="D1">
                                <div className="arrow">
                                    <a className="prev" onClick={() => plusSlidesManusiaPurba(-1)}>❮</a>
                                </div>
                                <div className='detail_evolusi_manusia'>
                                    <h1 class='h5'>Homo sapiens</h1>
                                    <p class='p5'>Muncul sekitar 300 ribu tahun yang lalu hingga sekarang membawa manusia ke puncak evolusi. Berkembang di Afrika dan menyebar ke seluruh dunia, Homo sapiens menampilkan perkembangan bahasa, seni, dan teknologi yang semakin kompleks, menggambarkan keunggulan adaptasi dan kemajuan manusia purba.</p>
                                </div>
                                <div className='evolusi_image'>
                                    <img src={Image3} s></img>
                                </div>
                                <div className="arrow">
                                    <a className="next" onClick={() => plusSlidesManusiaPurba(1)}>❯</a>
                                </div>
                            </div>
                            <div className="Slider"><img src={Slider5}></img></div>
                        </div>

                    </div>
                </div> */}
                <div className="bg_jenis" id="jenis">
                    <div className="slider">
                        <img class="arrow1" src={ArrowSlide1} onClick={() => plusSlidesJenisManusiaPurba(-1)}></img>
                        <div className='Jenis_Manusia_Purba' style={{ display: jenisManusiaPurbaIndex === 0 ? 'block' : 'none' }}>
                            <div className="D2">
                                <div className='jenis_image'>
                                    <img src={JenisImg1} width="100%" height="100%" alt="1"></img>
                                </div>
                                <div className='detail_jenis_manusia'>
                                    <h1 class='h4'>Kapak Tangan Acheulean</h1>
                                    <p class='p4'>Kapak tangan Acheulean adalah salah satu contoh paling awal dari perkakas batu yang diukir dan dibentuk dengan tangan manusia. Muncul sekitar 1,7 juta hingga 200.000 tahun yang lalu, kapak ini memiliki ujung yang tumpul, dirancang untuk keperluan serbaguna seperti memecahkan benda-benda keras atau memproses bahan-bahan alam.</p>
                                </div>
                            </div>
                        </div>
                        <div className='Jenis_Manusia_Purba' style={{ display: jenisManusiaPurbaIndex === 1 ? 'block' : 'none' }}>
                            <div className="D2">
                                <div className='jenis_image'>
                                    <img src={JenisImg2} width="100%" height="100%" alt="2"></img>
                                </div>
                                <div className='detail_jenis_manusia'>
                                    <h1 class='h4'>Pisau Paleolitikum</h1>
                                    <p class='p4'>Pisau Paleolitikum, terbuat dari batu yang dipecah dan diukir, muncul sejak Periode Paleolitikum, yang berlangsung sekitar 2,6 juta hingga 10.000 tahun yang lalu. Pisau-pisau ini menjadi alat serbaguna dalam kehidupan sehari-hari manusia prasejarah, digunakan untuk memotong dan menyayat, memproses makanan, membuat pakaian, dan keperluan lainnya.</p>
                                </div>
                            </div>
                        </div>
                        <div className='Jenis_Manusia_Purba' style={{ display: jenisManusiaPurbaIndex === 2 ? 'block' : 'none' }}>
                            <div className="D2">
                                <div className='jenis_image'>
                                    <img src={JenisImg3} width="100%" height="100%" alt="3"></img>
                                </div>
                                <div className='detail_jenis_manusia'>
                                    <h1 class='h4'>Alat Bifasial</h1>
                                    <p class='p4'>Alat Bifasial, yang diukir di kedua sisinya untuk memberikan tajam di kedua ujungnya, muncul sejak Zaman Paleolitikum Awal hingga Zaman Batu Pertengahan, berkisar sekitar 2,5 juta hingga 300.000 tahun yang lalu. Alat ini menunjukkan tingkat keahlian dalam pembuatan perkakas batu dan dapat digunakan untuk tugas-tugas yang lebih spesifik.</p>
                                </div>
                            </div>
                        </div>
                        <div className='Jenis_Manusia_Purba' style={{ display: jenisManusiaPurbaIndex === 3 ? 'block' : 'none' }}>
                            <div className="D2">
                                <div className='jenis_image'>
                                    <img src={JenisImg4} width="100%" height="100%" alt="4"></img>
                                </div>
                                <div className='detail_jenis_manusia'>
                                    <h1 class='h4'>Chopper</h1>
                                    <p class='p4'>Chopper adalah perkakas batu yang memiliki tepi yang kasar dan digunakan untuk memecahkan batu-batu besar menjadi pecahan-pecahan yang lebih kecil. Mereka adalah alat yang penting untuk mengakses bahan baku batu dan menghasilkan perkakas lainnya.</p>
                                </div>
                            </div>
                        </div>
                        <img class="arrow2" src={ArrowSlide2} onClick={() => plusSlidesJenisManusiaPurba(1)}></img>

                        {/* <img src={Jenis_Manusia}></img> */}
                    </div>
                </div>
            </div>

            <Navbar namaN1="Home" namaN2="Tentang" namaN3="Jenis" namaN4="" namaUrl1="/" namaUrl2="#tentang" namaUrl3="#jenis" namaUrl4="" />
        </div>
    )
}
export default Detail_Artefetak;