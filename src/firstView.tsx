import './firstView.css'
import Mysite from './assets/MysiteSvg/Mysite.svg';
import cloud from './assets/MysiteSvg/cloud.svg';
import star1 from './assets/MysiteSvg/star1.svg';
import star2 from './assets/MysiteSvg/star2.svg';
import star3 from './assets/MysiteSvg/star3.svg';
import barcode from './assets/MysiteSvg/barcode.svg';
import Mysitebg from './assets/MysiteSvg/Mysitebg.svg';

export default function FirstView() {
    return (
        <>
            <img src={star1} />
            <img src={star2} />
            <img src={star3} />
            <img src={cloud} />
            <img src={Mysite} />
            <img src={barcode} />
            <img src={Mysitebg} />
        </>
    )
}