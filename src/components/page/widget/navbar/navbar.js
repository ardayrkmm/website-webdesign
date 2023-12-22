
import './navbar.css'



function Navbar({ namaN1, namaN2, namaN3, namaN4, namaUrl1, namaUrl2, namaUrl3, namaUrl4 }) {


    return (
        <div className='navbar'>
            {/* <div className='content-nav1'>
                <div className='content-togle'>
                    <img src={home} width={24} height={24} alt='1' />
                    <img src={tentang} width={24} height={24} alt='2' />
                    <img src={kategori_i} width={24} height={24} alt='3' />
                    <img src={waktuI} width={24} height={24} alt='4' />

                </div>
            </div> */}

            <div className='content-nav'>
                <ul>
                    <li><a href={namaUrl1} className='textL'  >{namaN1}</a></li>
                    <li><a href={namaUrl2} className='textL'  >{namaN2}</a></li>
                    <li><a href={namaUrl3} className='textL' >{namaN3}</a></li>
                    <li><a href={namaUrl4} className='textL'  >{namaN4}</a></li>
                </ul>
            </div>
            <div className='clip-n'>

            </div>
        </div>
    );
}
export default Navbar;