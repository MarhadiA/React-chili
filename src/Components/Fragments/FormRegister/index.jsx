import './app.css'
import Image from '../../elements/Images'
import Logo from '../../../assets/Logo.svg'
import Title from '../../elements/Title'
import Label from '../../elements/Labels'
import Input from '../../elements/Input'
import Button from '../../elements/Button'
import Eye from '../../../assets/eye-off.svg'
import Google from '../../../assets/google.svg'


const FormRegister = ()=>{
    return (
    <>
     <div className="frame-56">
        <div lassName="logo">
        <Image src={Logo} alt="Logo"/>
        </div>
        <div className="frame-63">
         <Title>
         <h1 className="Dftr-txt"> Daftar</h1>
        <h1 className="Datang">Selamat Datang Kembali</h1>
     </Title>
        </div>
        <div className="frame-52">
            <div className="frame-50">
             <Label >
                <span className='username'>Username</span>
             </Label>
             </div>
             <div className="frame-47">
             <Input type="text" placeholder="Masukan Username" className="input-username" value=""/>
             </div>
        </div>
        <div className="password">
            <div className="frame-53">
                <Label>
                    <span className='sandi'>
                        Kata Sandi
                    </span>
                </Label> 
                 <div className="frame-49">
                 <Input type="password" placeholder="Masukan Kata Sandi" className="input-username" value=""/>
                 <Button className="btn">
                        <Image src={Eye}/>
                </Button>
                 </div>   
            </div> 
        </div>
        <div className="password">
            <div className="frame-53">
                <Label>
                    <span className='sandi'>
                      Konfirmasi Kata Sandi
                    </span>
                </Label> 
                 <div className="frame-49">
                 <Input type="password" placeholder="Masukan Kata Sandi" className="input-username" value=""/>
                 <Button className="btn">
                        <Image src={Eye}/>
                </Button>
                 </div> 
                 <div class="frame-55">
                        <div class="frame-54">
                            <p class="text-akun">Sudah punya akun ? <span class="span-msk">Masuk</span></p>
                        </div>
                </div>  
            </div> 
        </div>
        <div class="tombol">
                <Button className="btn-sign">
                    <span className="msk">Daftar</span>
                </Button>
                <span class="atau">Atau</span>
                <Button className="sign">
                    <div className="google">
                        <Image className="google" src={Google} alt=""/>
                    </div>
                    <span class="spn-google">Daftar Dengan google</span>
                </Button>
             </div>


    </div>
     </>
    )
}
export default FormRegister