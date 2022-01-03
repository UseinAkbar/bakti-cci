import React, { useEffect,useState } from "react";
import emailjs from 'emailjs-com';

const renderAlert = () => {
    return(
        <div className="px-4 py-3 rounded-md mb-6 leading-normal text-center bg-green-100 text-green-700">
            <p>Pesan telah berhasil di kirim</p>
        </div>
    )
} 

const Contact = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [status, setStatus] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send("service_s2i0n2b", "template_wap49vj", values, "user_gZ8njf5qVtng0Zct91Nd5")
            .then(res => {
                console.log("success", res);
                setValues({
                    name: '',
                    email: '',
                    message: '',
                });
                setStatus('SUCCESS');
            }, error => {
                console.log("Failed...", error);
            });
    }

    useEffect(() => {
        if(status === "SUCCESS"){
            setTimeout(() => {
                setStatus('');
            }, 3000);
        }
    }, [status])

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]:  e.target.value
        }))
    }
    return (
        <div>

            <div className="contact h-screen flex justify-center px-10">
                <div className="w-1/2 m-auto space-y-4">
                    <h1 className="font-raleway font-bold text-4xl">Saran & Masukan</h1>
                    <p className="font-nunito font-light w-7/12">Berikan kata-kata atau masukan Anda terhadap platform pendidikan yang sedang kami bangun.</p>
                    <div className="space-y-4">
                        <div className="flex font-nunito space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <p>
                                0858 7686 7879
                            </p>
                        </div>
                        <div className="flex font-nunito space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <p>
                                tkpgri05tegalampel@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 m-auto bg-white p-6 rounded-xl">
                    <div>
                        {status && renderAlert()}
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-3 mb-5">
                                <label className="font-raleway font-bold text-xl">Nama Anda</label>
                                <input name="name" autoComplete="off" value={values.name} onChange={handleChange} className="font-nunito w-full border-2 border-yellow-300 rounded p-2" placeholder="Masukkan nama Anda disini" />
                            </div>
                            <div className="space-y-3 mb-5">
                                <label className="font-raleway font-bold text-xl">Email Anda</label>
                                <input name="email" autoComplete="off" value={values.email} onChange={handleChange} className="font-nunito w-full border-2 border-yellow-300 rounded p-2" placeholder="Masukkan email Anda disini" />
                            </div>
                            <div className="space-y-3 mb-5">
                                <label className="font-raleway font-bold text-xl">Kritik dan Masukan Anda</label>
                                <textarea name="message"
                                    value={values.message} onChange={handleChange} className="font-nunito w-full border-2 border-yellow-300 rounded p-2 max-h-64" placeholder="Tulis kritik dan saran Anda terhadap pelayanan kami disini" rows={4} cols={50} >
                                </textarea>
                            </div>
                            <button className="bg-yellow-500 w-full p-3 font-bold font-raleway rounded-md">KIRIM</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );

    
}



export default Contact;