
import './tentang.css'
import hiu from '../../assets/hiu.png'
import patung from '../../assets/patung.png'
import Layout from '../layout/layout';
function Tentang() {
    return (
        <Layout>
            <div className='clip-t1' />
            <div className='content-tr'>
                <div className='clip-tr1' />
                <div className='clip-tr2' />
                <div className='clip-tr1' />
                <div className='clip-tr2' />
            </div>


            <div className='container-tentang'>
                <div className='c-head'>
                    <h1 className='judul'>TENTANG</h1>
                    <img src={hiu} alt='hiu' />
                </div>
                <div className='c-tentang'>
                    <p>
                        Museum Semedo yang berada di Desa Semedo, Kabupaten Tegal. Didalam museum ini tersimpan fosil-fosil purba yang ditemukan di Semedo diperkirakan usianya lebih tua dibandingkan fosil-fosil yang pernah ditemukan di Indonesia. Dari hasil penelitian ahli paleontologi, arkeologi, geologi, dan antropologi, menunjukkan Situs Purba Semedo memberikan data faktual evolusi manusia, budaya dan lingkungannya sejak setidaknya 1,5 juta tahun yang lalu. Temuan-temuan fosil fauna di sekitar Perbukitan Semedo menggambarkan panjangnya rentang kehidupan di Semedo.
                    </p>
                    <img src={patung} alt='ptung' />
                </div>
                <div className='clip-t2' />

                <div className='p-pr'>
                    <div className="cd-paralel" />
                    <div className="cd-paralel" />
                    <div className="cd-paralel" />
                    <div className="cd-paralel" />
                    <div className="cd-paralel" />
                    <div className="cd-paralel" />
                    <div className="cd-paralel" />
                    <div className="cd-paralel" />
                </div>

            </div>

        </Layout>
    );
}

export default Tentang;
