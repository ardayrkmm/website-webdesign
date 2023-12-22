import React, { useState, useEffect } from "react";
import Icon from "../../assets/icon.png";

import './DetailHewan.css';
import Image1 from "../../assets/image1.png";
import ImageJenis1 from "../../assets/111.jpg";
import ImageJenis2 from "../../assets/12.jpg";
import ImageJenis3 from "../../assets/1112.jpg";
import ImageJenis4 from "../../assets/113.jpg";
import ImageJenis5 from "../../assets/114.jpg";

import Image2 from "../../assets/image2.png";

import ArrowSlide1 from "../../assets/slideleft.png";
import ArrowSlide2 from "../../assets/slideright.png";
import Navbar from "../widget/navbar/navbar";
const Detail_Hewan = () => {
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

            <div className='tentang_manusia' id="tentang">
                <div className='header'>
                    <img src={Icon} width={308} height={94} alt="" class='center'></img>
                </div>
                <div className="bg_detail" >
                    <div className='test'>
                        <div className='detail_manusia'>
                            <div className="detail_image">
                                <img src={Image1} width='80%' height='80%'></img>
                            </div>
                            <div className='detail_manusia_purba'>
                                <h1 class='h1'>Tentang</h1>
                                <p class='p1'>
                                    Hewan purba, dengan kemegahan dan keanggunannya, adalah saksi bisu dari masa-masa dahulu yang menjelajahi dunia ini. Dengan fosil-fosil mereka sebagai petunjuk, kita menyelusuri jejak-jejak kehidupan yang telah lama berlalu. Dinosaurus yang perkasa memerintah daratan, mammoth yang megah melintasi padang rumput zaman es, dan saber-toothed cats yang menjelma sebagai pemburu paling tak terpahami.
                                    Mereka bukan hanya sekadar makhluk, melainkan pilar-pilar zaman yang menyimpan rahasia evolusi dan perjalanan panjang kehidupan di Bumi. Trilobita, dengan cangkang mereka yang indah, menandai era laut yang kaya akan keanekaragaman hayati, sementara ichthyosaur dan plesiosaur mengarungi lautan sebagai penguasa air.</p>
                                <p class='p2'>Ketika kita memandang fosil-fosil ini, kita merenung tentang keterlambatan waktu yang terus berjalan, membawa kita jauh dari masa kejayaan hewan purba. Keindahan dan kekuatan mereka, walaupun hanya terlihat melalui sisa-sisa batuan, memberikan inspirasi tentang keajaiban evolusi dan rentetan kehidupan yang telah berlangsung sejak zaman kuno. Hewan purba mengajarkan kita untuk menghargai keanekaragaman dan keteguhan kehidupan, bahkan jika mereka sendiri telah lama menghilang dari panggung dunia</p>
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
                                    <img src={ImageJenis1} width="100%" height="100%" alt="11"></img>
                                </div>
                                <div className='detail_jenis_manusia'>
                                    <h1 class='h4'>Stegodon</h1>
                                    <p class='p4'>Merupakan kelompok gajah purba yang hidup pada masa Pleistosen. Gajah ini memiliki gigi yang besar dan cenderung bertaring. Fosil-fosil stegodon telah ditemukan di berbagai lokasi di Indonesia, seperti Sangiran di Jawa Tengah.</p>
                                </div>
                            </div>
                        </div>
                        <div className='Jenis_Manusia_Purba' style={{ display: jenisManusiaPurbaIndex === 1 ? 'block' : 'none' }}>
                            <div className="D2">
                                <div className='jenis_image'>
                                    <img src={ImageJenis2} width="100%" height="100%" alt="12"></img>
                                </div>
                                <div className='detail_jenis_manusia'>
                                    <h1 class='h4'>Homo floresiensis</h1>
                                    <p class='p4'>Dikenal sebagai "manusia hobbit," spesies manusia purba ini hidup sekitar 50.000 hingga 100.000 tahun yang lalu di Pulau Flores, Nusa Tenggara Timur. Manusia hobbit ini memiliki postur tubuh kecil dan otak yang relatif kecil.</p>
                                </div>
                            </div>
                        </div>
                        <div className='Jenis_Manusia_Purba' style={{ display: jenisManusiaPurbaIndex === 2 ? 'block' : 'none' }}>
                            <div className="D2">
                                <div className='jenis_image'>
                                    <img src={ImageJenis3} width="100%" height="100%" alt="13"></img>
                                </div>
                                <div className='detail_jenis_manusia'>
                                    <h1 class='h4'>Gigantopithecus</h1>
                                    <p class='p4'>Meskipun belum ditemukan fosil langsung di Indonesia, gigantopithecus adalah jenis primata purba yang diyakini hidup di Asia Tenggara, termasuk mungkin wilayah Indonesia. Mereka adalah kera raksasa yang hidup sekitar satu juta hingga sembilan juta tahun yang lalu.</p>
                                </div>
                            </div>
                        </div>
                        <div className='Jenis_Manusia_Purba' style={{ display: jenisManusiaPurbaIndex === 3 ? 'block' : 'none' }}>
                            <div className="D2">
                                <div className='jenis_image'>
                                    <img src={ImageJenis4} width="100%" height="100%" alt="14"></img>
                                </div>
                                <div className='detail_jenis_manusia'>
                                    <h1 class='h4'>Trilobita</h1>
                                    <p class='p4'>Meskipun terutama ditemukan di lapisan batuan laut, fosil trilobita juga dapat ditemukan di beberapa lokasi di Indonesia. Mereka adalah kelompok arthropoda laut yang hidup sekitar 521 hingga 252 juta tahun yang lalu.</p>
                                </div>
                            </div>
                        </div>
                        <div className='Jenis_Manusia_Purba' style={{ display: jenisManusiaPurbaIndex === 4 ? 'block' : 'none' }}>
                            <div className="D2">
                                <div className='jenis_image'>
                                    <img src={ImageJenis5} width="100%" height="100%" alt="15"></img>
                                </div>
                                <div className='detail_jenis_manusia'>
                                    <h1 class='h4'>Sivapithecus</h1>
                                    <p class='p4'>Spesies kera purba yang hidup sekitar 12 hingga 9 juta tahun yang lalu. Fosil-fosil sivapithecus telah ditemukan di beberapa tempat di Indonesia, seperti di Sangiran dan Trinil di Jawa.</p>
                                </div>
                            </div>
                        </div>
                        <img class="arrow2" src={ArrowSlide2} onClick={() => plusSlidesJenisManusiaPurba(1)}></img>

                        <Navbar namaN1="Home" namaN2="Tentang" namaN3="Jenis" namaN4="" namaUrl1="/" namaUrl2="#tentang" namaUrl3="#jenis" namaUrl4="" />
                        {/* <img src={Jenis_Manusia}></img> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail_Hewan;