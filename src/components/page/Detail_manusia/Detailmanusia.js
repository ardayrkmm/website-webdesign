import React, { useState, useEffect } from "react";
import Icon from "../../assets/icon.png";

import './Detailmanusia.css';
import m1 from '../../assets/m1.png'
import m2 from '../../assets/m2.png'
import m3 from '../../assets/m3.png'
import m4 from '../../assets/m4.png'
import m5 from '../../assets/m5.png'
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import JenisImg1 from "../../assets/11.jpg";
import JenisImg2 from "../../assets/12.jpg";
import JenisImg3 from "../../assets/13.jpg";

import Slider1 from "../../assets/slider1.png";
import Slider2 from "../../assets/slider2.png";
import Slider3 from "../../assets/slider3.png";
import Slider4 from "../../assets/slider4.png";
import Slider5 from "../../assets/slider5.png";
import ArrowSlide1 from "../../assets/slideleft.png";
import ArrowSlide2 from "../../assets/slideright.png";
import Navbar from "../widget/navbar/navbar";
const Detail_Manusia_Page = () => {
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
                <div className="bg_detail">
                    <div className='test'>
                        <div className='detail_manusia'>
                            <div className="detail_image">
                                <img src={Image1} width='80%' height='80%'></img>
                            </div>
                            <div className='detail_manusia_purba' id="tentang">
                                <h1 class='h1'>Tentang</h1>
                                <p class='p1'>manusia purba" biasanya digunakan untuk merujuk kepada spesies manusia yang hidup sebelum Homo sapiens (manusia modern). Ini mencakup berbagai spesies manusia primitif yang telah punah. Beberapa contoh manusia purba meliputi Homo habilis, Homo erectus, Neanderthal (Homo neanderthalensis), dan spesies lainnya.</p>
                                <p class='p2'>manusia purba" biasanya digunakan untuk merujuk kepada spesies manusia yang hidup sebelum Homo sapiens (manusia modern). Ini mencakup berbagai spesies manusia primitif yang telah punah. Beberapa contoh manusia purba meliputi Homo habilis, Homo erectus, Neanderthal (Homo neanderthalensis), dan spesies lainnya.</p>
                                {/* <img src={Tentang_manusia} alt=""></img> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg_evolusi">
                    <div className='Evolusi_manusia' id="evolusi">
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
                                    <img src={m1}></img>
                                    <div className="clipM" />
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
                                    <img src={m2}></img>
                                    <div className="clipM" />
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
                                    <img src={m3} s></img>
                                    <div className="clipM" />
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
                                    <img src={m4} s></img>
                                    <div className="clipM" />
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

                                    <img src={m5} s></img>
                                    <div className="clipM" />
                                </div>
                                <div className="arrow">
                                    <a className="next" onClick={() => plusSlidesManusiaPurba(1)}>❯</a>
                                </div>
                            </div>
                            <div className="Slider"><img src={Slider5}></img></div>
                        </div>

                    </div>
                </div>
                <div className="bg_jenis" id="jenis">
                    <div className="slider">
                        <img class="arrow1" src={ArrowSlide1} onClick={() => plusSlidesJenisManusiaPurba(-1)}></img>
                        <div className='Jenis_Manusia_Purba' style={{ display: jenisManusiaPurbaIndex === 0 ? 'block' : 'none' }}>
                            <div className="D2">
                                <div className='jenis_image'>
                                    <img src={JenisImg1} width="100%" height="100%"></img>
                                </div>
                                <div className='detail_jenis_manusia'>
                                    <h1 class='h4'>Pithecanthropus erectus</h1>
                                    <p class='p4'>Pada tahun 1891, Eugene Dubois menemukan fosil Homo erectus pertama di Trinil, Jawa Timur. Fosil ini kemudian dikenal sebagai "Pithecanthropus erectus" (manusia kera berjalan tegak). Penemuan ini memberikan bukti bahwa Homo erectus telah menyebar ke wilayah Asia Tenggara, termasuk Indonesia, sekitar 1,8 juta tahun yang lalu.</p>
                                </div>
                            </div>
                        </div>
                        <div className='Jenis_Manusia_Purba' style={{ display: jenisManusiaPurbaIndex === 1 ? 'block' : 'none' }}>
                            <div className="D2">
                                <div className='jenis_image'>
                                    <img src={JenisImg2} width="100%" height="100%"></img>
                                </div>
                                <div className='detail_jenis_manusia'>
                                    <h1 class='h4'>Homo floresiensis</h1>
                                    <p class='p4'>Pada tahun 2003, tim arkeolog menemukan fosil manusia purba yang unik di Liang Bua, Pulau Flores. Manusia ini kemudian dikenal sebagai Homo floresiensis atau "Manusia Hobbit." Spesies ini diyakini hidup sekitar 100,000 hingga 60,000 tahun yang lalu dan memiliki tubuh kecil dengan tinggi sekitar satu meter.</p>
                                </div>
                            </div>
                        </div>
                        <div className='Jenis_Manusia_Purba' style={{ display: jenisManusiaPurbaIndex === 2 ? 'block' : 'none' }}>
                            <div className="D2">
                                <div className='jenis_image'>
                                    <img src={JenisImg3} width="100%" height="100%"></img>
                                </div>
                                <div className='detail_jenis_manusia'>
                                    <h1 class='h4'>Homo sapiens</h1>
                                    <p class='p4'>Manusia modern (Homo sapiens) juga telah tinggal di Indonesia selama ribuan tahun. Bukti peninggalan arkeologi menunjukkan keberadaan manusia modern di berbagai wilayah, termasuk situs-situs di Sumatra, Jawa, dan Sulawesi.</p>
                                </div>
                            </div>
                        </div>

                        <img class="arrow2" src={ArrowSlide2} onClick={() => plusSlidesJenisManusiaPurba(1)}></img>

                        {/* <img src={Jenis_Manusia}></img> */}
                    </div>
                </div>
            </div>

            <Navbar namaN1="Home" namaN2="Tentang" namaN3="Evolusi" namaN4="Jenis" namaUrl1="/" namaUrl2="#tentang" namaUrl3="#evolusi" namaUrl4="#jenis" />
        </div>
    )
}
export default Detail_Manusia_Page;