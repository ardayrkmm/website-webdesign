import './waktu.css'
import time from '../../assets/time.png'

function waktu({ sectionRef }) {
    return (
        <div className="container-waktu" id={sectionRef}>
            <div className='content-card'>
                <div className='card-waktu'>
                    <img src={time} alt='waktu' width={429} height={321} />
                    <div className='bagianT'>
                        <h1>
                            Jadwal
                        </h1>

                        <p>
                            Selasa - Minggu<br></br> 08.00 - 15.30 <br></br> Kunjungan di buka gratis untuk umum, di wajibkan untuk reservasi
                        </p>


                    </div>
                </div>
                <div className='p-paralel-w'>
                    <div className="child-paralel-w" />
                    <div className="child-paralel-w" />
                    <div className="child-paralel-w" />
                    <div className="child-paralel-w" />
                    <div className="child-paralel-w" />
                    <div className="child-paralel-w" />

                </div>
            </div>


        </div>
    )
}

export default waktu;