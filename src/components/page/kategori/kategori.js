import './kategori.css'
import imgManusia from '../../assets/manusia_purba.png';
import imgHewan from '../../assets/hewan_Purba.png';
import imgArti from '../../assets/artifetak.png';
import arrowR from '../../assets/arrow.png';
import { Link } from 'react-router-dom';
function Kategori({ sectionRef }) {
    return (
        <div className="container-A" id={sectionRef}>
            <div className='child-A1'>

                <CardK urlImg={imgManusia} altTxt="Uw" ukuran="l" txtBtn="Manusia Purba" posisi="atas" urlK="/detailM" />
                <CardK urlImg={imgHewan} altTxt="Uw" ukuran="s" txtBtn="Hewan Purba" posisi="atas" urlK="/detailH" />
            </div>
            <div className='child-A2'>
                <h1>
                    JELAJAH
                </h1>
                <CardK urlImg={imgArti} altTxt="Uw" ukuran="s" txtBtn="Artefak" posisi="bawah" urlK="/detailA" />
                <div className='container-clip'>
                    <div className='clip-K1'>
                        <h1>Jelajahi Kehidupan</h1>
                    </div>
                    <div className='clip-K2'>
                        <h1>
                            Kehidupan saat jaman purba memiliki banyak peninggalan yang bersejarah
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


function CardK(props) {
    const { urlImg, altTxt, w, h, ukuran, txtBtn, posisi, urlK } = props;
    return (
        <div className={`card-k card-k-${ukuran}`}>
            <img src={urlImg} alt={altTxt} width={w} height={h} className={`imag-${ukuran}`}>
            </img>
            <Link to={urlK}>
                <div className={`btn-K-${posisi}`} >
                    <h1>
                        {txtBtn}
                    </h1>
                    <img src={arrowR} alt='al' className='arw' />
                </div>
            </Link>

        </div>
    )
}
export default Kategori;