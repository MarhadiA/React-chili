import './form-login.css';
import Input from '../../elements/Input';
import Label from '../../elements/Labels';
import Image from '../../elements/Images';
import Logo from '../../../assets/Logo.svg';
import Title from '../../elements/Title';
import Button from '../../elements/Button';
import Eye from '../../../assets/eye-off.svg';
import Google from '../../../assets/google.svg';
import { Fragment } from 'react';

const FormLogin = () =>{
    return (
    <Fragment>
     <div className="frame-56">
           <Image src={Logo} alt="Logo"></Image>
            <Title>
                <span className="masuk">Masuk</span>
                <span className="datang">Selamat Datang Kembali</span>
            </Title>
            <div className="frame-52">
                <Label >
                    <span className="username">Username</span>
                </Label>
                <div className="frame-47">
                <Input type="text" placeholder="Masukan Email" className="input-username" value=""/>
                </div>
            </div>
             <div className="password">
                <div className="frame-53">
                    <div className="frame-51">
                        <Label>
                            <span className="label-pass">Password</span>
                        </Label>
                    </div>
                    <div className="frame-49">
                        <Input type="password" className='input-sandi' placeholder="Masukan Password" value=""/>
                        <Button className="btn">
                            <Image src={Eye}/>
                        </Button>
                    </div>
                </div>
                <div className="frame-55">
                    <div className="frame-54">Belum punya akun? <span className="dftr">Daftar</span>
                    </div>
                    <span className="lupa-sandi">Lupa Kata Sandi</span>
                
                </div>
            </div>
            <div className="tombol">
                <Button className="btn-sign">
                    <span className="msk">Masuk</span>
                </Button>
                <span className="atau">Atau</span>
                <Button className="sign">
                    <div className="google">
                        <Image className="google" src={Google} alt=""/>
                    </div>
                    <span className="spn-google">Daftar Dengan google</span>
                </Button>
             </div>

        </div>
    </Fragment>
    )
}
export default FormLogin