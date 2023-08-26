import React, { useState } from "react";

const Contactinfo = () => {
    const [nomerHp, setNomerHp] = useState("");
    const [nama, setNama] = useState("");
    const [tinggiBadan, setTinggiBadan] = useState("");
    const [beratBadan, setBeratBadan] = useState("");
    const [imt, setImt] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const imtValue = beratBadan / (tinggiBadan / 100) ** 2;
        setImt(imtValue);

        if (imtValue < 17) {
            setStatus("Sangat Kurus");
        } else if (imtValue >= 17 && imtValue < 18.5) {
            setStatus("Kurus");
        } else if (imtValue >= 18.5 && imtValue < 25) {
            setStatus("Normal");
        } else if (imtValue >= 25 && imtValue < 27) {
            setStatus("Gemuk");
        } else {
            setStatus("Obesitas");
        }

    };

    // const handleSubmit = () => {
    //     console.log()
    // }
    return (
        <>


            <div className="container mt-5 col-md-6">
                <h1>Input Data Person</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nomer_hp" className="form-label">
                            Nomer HP:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nomer_hp"
                            value={nomerHp}
                            onChange={(e) => setNomerHp(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nama" className="form-label">
                            Nama:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nama"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tinggi_badan" className="form-label">
                            Tinggi Badan (cm):
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="tinggi_badan"
                            value={tinggiBadan}
                            onChange={(e) => setTinggiBadan(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="berat_badan" className="form-label">
                            Berat Badan (kg):
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="berat_badan"
                            value={beratBadan}
                            onChange={(e) => setBeratBadan(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Simpan
                    </button>
                    <button type="reset" className="btn btn-primary">
                        Batal
                    </button>
                </form>
                {imt && (
                    <div className="mt-3">
                        <p>Nama: {nama}</p>
                        <p>IMT: {imt.toFixed(2)}</p>
                        <p>Tinggi Badan: {tinggiBadan}</p>
                        <p>Berat Badan: {beratBadan}</p>
                        <p>Nomer Hp: {nomerHp}</p>
                        <p>Status: {status}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Contactinfo;
