
import './home.css'
import logo from '../../assets/logo.png'
import header from '../../assets/museumImg.png'
import Layout from '../layout/layout';
function Home() {
    return (
        <Layout>

            <div className='container-home'>

                <img src={logo} alt='aa' className='logo' />


                <div className='container-h'>
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

        </Layout>
    );
}

export default Home;
