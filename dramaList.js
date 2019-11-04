import React from 'react';

const Dramalist = ({drama_s}) => {
    return (
        <div>
            {drama_s.map((drama) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{drama.judul}</h5>
                        <h6 className="card-subtitle">{drama.jumlah_episode}</h6>
                        <h7 className="card-subtitle">{drama.pemain}</h7>
                        
                        <div>
                            <h8 className="card-subtitle">{drama.sinopsis}</h8>
                        </div>
                    
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Dramalist;