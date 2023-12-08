import './layout.css';
import home from '../../assets/home_icon.png';
import tentang from '../../assets/tentang_icon.png';
import kategori_i from '../../assets/kategori_icon.png';
import waktuI from '../../assets/waktu_icon.png';
const Layout = (props) => {

    const { children } = props;
    return (
        <div className='container'>
            <div className='navbar'>
                <div className='content-nav1'>
                    <div className='content-togle'>
                        <img src={home} width={24} height={24} alt='1' />
                        <img src={tentang} width={24} height={24} alt='2' />
                        <img src={kategori_i} width={24} height={24} alt='3' />
                        <img src={waktuI} width={24} height={24} alt='4' />

                    </div>
                </div>

                <div className='content-nav'>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>

            </div>

            {children}
        </div>
    );
}

export default Layout;