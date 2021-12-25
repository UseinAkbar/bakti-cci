import React from "react";

const Contact = () => {
    return (
        <div>

            <div className="h-screen bg-yellow-100 flex justify-center px-10">
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
                        <form action="" method="post">
                            <div className="space-y-3 mb-5">
                                <label className="font-raleway font-bold text-xl">Nama Anda</label>
                                <input className="font-nunito w-full border-2 border-yellow-300 rounded p-2" placeholder="Masukkan nama Anda disini" />
                            </div>
                            <div className="space-y-3 mb-5">
                                <label className="font-raleway font-bold text-xl">Email Anda</label>
                                <input className="font-nunito w-full border-2 border-yellow-300 rounded p-2" placeholder="Masukkan email Anda disini" />
                            </div>
                            <div className="space-y-3 mb-5">
                                <label className="font-raleway font-bold text-xl">Kritik dan Saran Anda</label>
                                <textarea 
                                    className="font-nunito w-full border-2 border-yellow-300 rounded p-2 max-h-64" placeholder="Tulis kritik dan saran Anda terhadap pelayanan kami disini" rows="4" cols="50">

                                </textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;