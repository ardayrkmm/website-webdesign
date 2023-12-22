import './home.css'
import logo from '../../assets/logo.png'
import header from '../../assets/museumImg.png'

import Tentang from '../tentang/tentang';
import Kategori from '../kategori/kategori';
import Waktu from '../waktu/waktu';
import Navbar from '../widget/navbar/navbar';
function Home() {

    return (
        <div className="Container-H" >

            <div className='child-H' id='home'>

                <img src={logo} alt='aa' className='logo' />


                <div className='container-h' id='section1'>
                    <div className='clip-1' />


                    <img src={header} alt='ll' className='img-h' />

                    <div className='clip-2' />
                </div>

                <div className='section-pesan'>

                    <div className='clip-p1'>
                        <h1>Museum Semedo</h1>
                    </div>
                    <div className='clip-p2'>
                        <h1>Menyelami Kehidupan Purba melalui Koleksi Penuh Makna</h1>
                    </div>

                    <div className='p-paralel'>
                        <div className="child-paralel" />
                        <div className="child-paralel" />
                        <div className="child-paralel" />
                        <div className="child-paralel" />
                        <div className="child-paralel" />
                        <div className="child-paralel" />

                    </div>
                </div>
            </div>

            <Tentang sectionRef="tentang" />
            <Kategori sectionRef="kategori" />
            <Waktu sectionRef="waktu" />
            <Navbar namaN1="Home" namaN2="Tentang" namaN3="Kategori" namaN4="Waktu" namaUrl1="#home" namaUrl2="#tentang" namaUrl3="#kategori" namaUrl4="#waktu" />
        </div>
    );
}

export default Home;