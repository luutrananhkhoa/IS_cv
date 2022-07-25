import React from "react";
import styles from './styles.module.scss';
import logo from './images/logo_iig.png';

const Index = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.containerContent}>
                <div className={styles.containerSection}>
                    <div className={styles.sectionFirst}>
                        <div className={styles.sectionFirst__img}>
                            <img src={logo} alt="" />
                        </div>
                        <h1>IIG Vietnam</h1>
                    </div>
                    <h2>Giới thiệu</h2>
                    <p>Tổ chức Giáo dục IIG Việt Nam là đơn vị hàng đầu tại Việt Nam, Lào, Campuchia và Myanmar về khảo thí, kiểm định và đảm bảo chất lượng các chứng chỉ quốc TOEIC, TOEFL, MOS, IC3, IC3 Spark, MCE, Adobe Certified Professional, Apple Swift, SAT, SSAT, GRE, CFA… </p>
                    <h2>Đăng ký xác thực chứng chỉ</h2>
                    <button>Đăng ký</button>
                </div>          
            </div>
        </div>
     );
}
 
export default Index;